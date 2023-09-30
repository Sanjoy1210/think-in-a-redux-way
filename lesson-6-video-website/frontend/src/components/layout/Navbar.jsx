import Search from "./Search";
import logo from "../../assets/utube.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <span className="flex items-center space-x-2.5">
            <img className="h-10" src={logo} alt="UTube video" />
            <h1 className="font-bold text-2xl">UTube</h1>
          </span>
        </Link>
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
