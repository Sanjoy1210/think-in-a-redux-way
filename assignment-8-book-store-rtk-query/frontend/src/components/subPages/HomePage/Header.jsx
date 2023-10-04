import { setFeatured } from '@rtk/features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const { featured } = useSelector((state) => state.filters);

  const handleClick = (text) => {
    dispatch(setFeatured(text));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${
            featured === 'all' ? 'active-filter' : ''
          } `}
          onClick={() => handleClick('all')}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            featured === 'featured' ? 'active-filter' : ''
          } `}
          onClick={() => handleClick('featured')}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
