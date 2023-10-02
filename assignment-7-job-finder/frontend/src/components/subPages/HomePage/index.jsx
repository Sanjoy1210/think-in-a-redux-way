import { useState } from 'react';
import { useSelector } from 'react-redux';
import AllJobList from './AllJobList';
import FiltersSection from './FiltersSection';

export default function HomePage() {
  const [sortType, setSortType] = useState('');
  const [text, setText] = useState('');
  const { filterType } = useSelector((state) => state.posts);

  return (
    <>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All {filterType} Jobs</h1>
        <FiltersSection
          text={text}
          setText={setText}
          sortType={sortType}
          setSortType={setSortType}
        />
      </div>

      <AllJobList text={text} sortType={sortType} />
    </>
  );
}
