const Navbar = () => {
  return (
    <nav className="bg-[#1c1c3c] text-white py-6 px-4 flex items-center justify-between">
      <a className="font-bold text-xl tracking-tight" href="#">
        Pixel Owl
      </a>
      <div className="flex items-center">
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Home
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Play
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Scoreboard
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
