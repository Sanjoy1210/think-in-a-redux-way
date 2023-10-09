/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Error,
  FormInput,
  FormSubmitButton,
  FormTextarea,
} from '@components/reusable';
import {
  conversationsApi,
  useAddConversationMutation,
  useEditConversationMutation,
} from '@rtk/features/conversations/conversationsApi';
import { useGetUserQuery } from '@rtk/features/users/usersApi';
import isValidEmail from '@utils/isValidEmail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal({ open, control }) {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [isSkip, setIsSkip] = useState(false);
  const { user: loggedInUser } = useSelector((state) => state.auth) || {};
  const { email: myEmail } = loggedInUser || {};
  const dispatch = useDispatch();
  const [responseError, setResponseError] = useState('');
  const [conversation, setConversation] = useState(undefined);

  const { data: participant } = useGetUserQuery(to, {
    skip: !isSkip,
  });
  const [editConversation, { isSuccess: isEditConversationSuccess }] =
    useEditConversationMutation();
  const [addConversation, { isSuccess: isAddConversationSuccess }] =
    useAddConversationMutation();

  useEffect(() => {
    if (participant?.length > 0 && participant?.[0]?.email !== myEmail) {
      // check conversation existance
      dispatch(
        conversationsApi.endpoints.getConversation.initiate({
          userEmail: myEmail,
          participantEmail: to,
        })
      )
        .unwrap()
        .then((data) => {
          setConversation(data);
        })
        .catch((err) => setResponseError('There was a problem'));
    }
  }, [dispatch, myEmail, participant, to]);

  // listen conversation add/edit success
  useEffect(() => {
    if (isAddConversationSuccess || isEditConversationSuccess) {
      control();
    }
  }, [isAddConversationSuccess, isEditConversationSuccess]);

  const debounce = (fn, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    if (isValidEmail(value)) {
      setIsSkip(true);
      setTo(value);
    }
  };

  const handleSearch = debounce(doSearch, 500);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (conversation?.length > 0) {
      // edit conversation
      editConversation({
        id: conversation?.[0]?.id,
        sender: myEmail,
        data: {
          participants: `${myEmail}-${participant?.[0]?.email}`,
          users: [
            loggedInUser,
            {
              id: participant?.[0]?.id,
              name: participant?.[0]?.name,
              email: participant?.[0]?.email,
            },
          ],
          message,
          timestamp: new Date().getTime(),
        },
      });
    } else if (conversation?.length === 0) {
      // add conversation
      addConversation({
        sender: myEmail,
        data: {
          participants: `${myEmail}-${participant?.[0]?.email}`,
          users: [
            loggedInUser,
            {
              id: participant?.[0]?.id,
              name: participant?.[0]?.name,
              email: participant?.[0]?.email,
            },
          ],
          message,
          timestamp: new Date().getTime(),
        },
      });
    }
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        />
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send message
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <FormInput
                id="to"
                name="to"
                type="email"
                label="To"
                placeholder="Send to"
                className="rounded-t-md"
                onChange={(e) => handleSearch(e.target.value)}
              />

              <FormTextarea
                label="Message"
                id="message"
                name="message"
                placeholder="Message"
                className="rounded-b-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <FormSubmitButton
              text="Send Message"
              type="Submit"
              disabled={
                conversation === undefined ||
                (participant?.length > 0 && participant?.[0]?.email === myEmail)
              }
            />

            {participant?.length === 0 && (
              <Error message="User doesn't exist" />
            )}

            {participant?.length > 0 && participant?.[0]?.email === myEmail && (
              <Error message="You can't send message to yourself" />
            )}

            {responseError && <Error message={responseError} />}
          </form>
        </div>
      </>
    )
  );
}
