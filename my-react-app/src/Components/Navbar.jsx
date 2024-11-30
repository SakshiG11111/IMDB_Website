import Logo from "../assets/IMDB_Logo.png"; // Importing the logo
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      {/* Logo Link */}
      <Link to="/">
        <img src={Logo} className="w-[50px] " />
      </Link>

      {/* Navigation Links */}
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>
      
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
