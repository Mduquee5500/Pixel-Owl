import Login from "../components/Login";
import backgroundImage from "../../src/assets/img/background.png";

const Header = ({ text }) => {
  return (
    <h1 className="text-6xl font-bold font-mono mb-2 mt-10 text-center leading-tight text-white drop-shadow-lg">
      {text}
    </h1>
  );
};

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md pt-8">
        <Header text="Welcome to Pixel Owl!" />
      </div>
      <div className="w-full max-w-md">
        <Login />
      </div>
    </div>
  );
};

export default Home;
