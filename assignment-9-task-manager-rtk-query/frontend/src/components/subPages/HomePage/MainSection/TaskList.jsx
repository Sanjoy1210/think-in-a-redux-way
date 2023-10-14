import { Error } from '@components/reusable';
import { useGetTasksQuery } from '@rtk/features/tasks/tasksApi';
import { useSelector } from 'react-redux';
import Task from './Task';

export default function TaskList() {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const { selected, search } = useSelector((state) => state.filters);
  const regEx = new RegExp(search, 'ig');

  const filterBySelected = (task) => {
    return selected?.includes(task?.project?.projectName);
  };

  const filterBySearch = (task) => {
    return task?.taskName?.search(regEx) > -1 ? true : false;
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  if (!isLoading && !isError && tasks?.length === 0) {
    content = <div>No task found</div>;
  }
  if (!isLoading && !isError && tasks?.length > 0) {
    content = (
      <div className="lws-task-list">
        {tasks
          .filter(filterBySelected)
          .filter(filterBySearch)
          .map((task) => (
            <Task key={task?.id} task={task} />
          ))}
      </div>
    );
  }
  return content;
}
