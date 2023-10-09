import { messagesApi } from '@rtk/features/messages/messagesApi';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Message from './Message';

export default function Messages({ messages = [], totalCount }) {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth) || {};
  const { email } = user || {};
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  const fetchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      dispatch(
        messagesApi.endpoints.getMoreMessages.initiate({
          id,
          page,
        })
      );
    }
  }, [page, id, dispatch]);

  useEffect(() => {
    if (totalCount > 0) {
      const more =
        Math.ceil(totalCount / Number(import.meta.env.VITE_MESSAGES_PER_PAGE)) >
        page;

      setHasMore(more);
    }
  }, [totalCount, page]);

  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] pl-6 pt-6 overflow-y-hidden flex flex-col-reverse">
      <ul
        className="space-y-2 pr-4"
        id="scroll"
        style={{
          height: 'calc(100vh - 197px)',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          dataLength={messages?.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scroll"
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          inverse
        >
          {messages
            ?.slice()
            ?.sort((a, b) => b.timestamp - a.timestamp)
            ?.map((message) => {
              const { message: lastMessage, id, sender } = message;
              const justify = sender.email !== email ? 'start' : 'end';
              return (
                <Message key={id} justify={justify} message={lastMessage} />
              );
            })}
        </InfiniteScroll>
      </ul>
    </div>
  );
}
