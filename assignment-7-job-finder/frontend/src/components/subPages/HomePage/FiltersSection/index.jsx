export default function FiltersSection({
  text,
  sortType,
  setText,
  setSortType,
}) {
  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <select
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Default</option>
        <option value="asc">Salary (Low to High)</option>
        <option value="desc">Salary (High to Low)</option>
      </select>
    </div>
  );
}
