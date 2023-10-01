import { RadioBtn } from '@components/reusable';
import { selectedSort, setFilter } from '@rtk/features/filters/filtersSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { sort: sortOption, filter: filterOpt } = useSelector(
    (state) => state.filters
  );
  const [filterOptions, setFilterOptions] = useState({
    sort: sortOption,
    filter: filterOpt,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'sort') {
      dispatch(selectedSort(value));
    }
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500 focus:outline-none"
            value={filterOptions.sort}
            onChange={handleChange}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <RadioBtn
              id="lws-all"
              name="filter"
              title="All"
              value="all"
              checked={filterOptions.filter === 'all'}
              onChange={handleChange}
            />
            <RadioBtn
              id="lws-saved"
              name="filter"
              title="Saved"
              value="saved"
              checked={filterOptions.filter === 'saved'}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
