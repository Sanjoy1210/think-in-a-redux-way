import { useDispatch, useSelector } from "react-redux";
import { statusSelected } from "../redux/filters/actions";

function SectionHeader() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.filters.status);

  const handleFilter = (status) => {
    dispatch(statusSelected(status));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${status === "all" ? "active-filter" : ""}`}
          id="lws-filterAll"
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            status === "featured" ? "active-filter" : ""
          }`}
          id="lws-filterFeatured"
          onClick={() => handleFilter("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
