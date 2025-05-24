import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-[#1c1c3c] text-white py-6 px-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <Link className="font-bold text-xl tracking-tight font-mono" to="/">
        Pixel Owl
      </Link>
      <div className="flex items-center space-x-2">
        <Link
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono"
          to="/"
        >
          Home
        </Link>

        {user && (
          <>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono cursor-pointer"
            >
              Logout
            </button>
            <Link
              className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-mono"
              to="/play"
            >
              Play
            </Link>
          </>
        )}

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
