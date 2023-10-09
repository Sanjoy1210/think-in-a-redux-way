// import Blank from "./Blank";
import { Error } from '@components/reusable';
import { useGetMessagesQuery } from '@rtk/features/messages/messagesApi';
import { useParams } from 'react-router-dom';
import ChatHead from './ChatHead';
import Messages from './Messages';
import Options from './Options';

export default function ChatBody() {
  const { id } = useParams() || {};
  const { data, isLoading, isError, error } = useGetMessagesQuery(id) || {};

  const { data: messages, totalCount } = data || {};

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  if (!isLoading && !isError && messages?.length === 0) {
    content = <Error message="No messages found" />;
  }
  if (!isLoading && !isError && messages?.length > 0) {
    content = (
      <>
        <ChatHead message={messages[0]} />
        <Messages messages={messages} totalCount={totalCount} />
        <Options info={messages[0]} />
      </>
    );
  }
  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">{content}</div>
    </div>
  );
}
