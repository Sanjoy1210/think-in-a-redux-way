import AddNew from './AddNew';
import TaskList from './TaskList';

export default function MainSection() {
  return (
    <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <AddNew />
        <TaskList />
      </main>
    </div>
  );
}
