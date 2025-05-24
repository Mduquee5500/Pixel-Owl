import owlLogo from "../assets/img/owl-export.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full max-w-xs m-auto bg-[#7a367b] rounded p-5">
        <header>
          <img className="w-15 mx-auto mb-5" src={owlLogo} alt="Logo" />
        </header>
        <form>
          <div>
            <label className="block mb-2 text-[#241527]" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#241527] outline-none focus:bg-gray-300"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <footer className="flex justify-between text-sm">
          <a className="text-indigo-700 hover:text-pink-700" href="#">
            Forgot Password?
          </a>
          <a className="text-indigo-700 hover:text-pink-700" href="#">
            Create Account
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
