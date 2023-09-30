import { searched } from "@rtk/features/filter/filterSlice";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

function Search() {
  const { search } = useSelector((state) => state.filter);
  const [text, setText] = useState(search);
  const dispatch = useDispatch();

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(text));

    // if user is not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
      <span>
        <BsSearch />
      </span>
    </div>
  );
}

export default Search;
