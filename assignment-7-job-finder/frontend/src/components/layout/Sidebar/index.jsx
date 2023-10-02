import { fetchPosts, selectedFilterType } from '@rtk/features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleFilter = (type) => {
    dispatch(fetchPosts(type));
    const text = type === '' ? 'Available' : type;
    dispatch(selectedFilterType(text));
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <span
              className="main-menu menu-active space-x-1 cursor-pointer"
              id="lws-alljobs-menu"
              onClick={() => handleFilter('')}
            >
              <i className="fa-solid fa-briefcase"></i>
              <span>All Available Jobs</span>
            </span>
            <ul className="space-y-6 lg:space-y-2 ">
              <ListItem
                text="Internship"
                color="#FF5757"
                id="lws-internship-menu"
                onClick={() => handleFilter('Internship')}
              />
              <ListItem
                text="Full Time"
                color="#FF8A00"
                id="lws-fulltime-menu"
                onClick={() => handleFilter('Full Time')}
              />
              <ListItem
                text="Remote"
                color="#56E5C4"
                id="lws-remote-menu"
                onClick={() => handleFilter('Remote')}
              />
            </ul>
          </li>
          <li>
            <Link
              to="/create"
              className="main-menu space-x-1"
              id="lws-addJob-menu"
            >
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
