import Blank from '@components/subPages/InboxPage/Blank';
import Navigation from '@components/subPages/InboxPage/Navigation';
import Sidebar from '@components/subPages/InboxPage/Sidebar';

export default function Conversations() {
  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
              <Blank />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
