import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1c1c3c] text-white py-6 px-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <Link className="font-bold text-xl tracking-tight font-mono" to="/">
        Pixel Owl
      </Link>
      <div className="flex items-center">
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono"
          to="/play"
        >
          Play
        </Link>
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono"
          to="/scoreboard"
        >
          Scoreboard
        </Link>
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono"
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
