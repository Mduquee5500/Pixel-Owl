import backgroundImage from "../../src/assets/img/background.png";
import Game from "../components/Game";

const Welcome = () => {
  return (
    <>
      <h2 className="text-3xl font-bold font-mono mt-20 text-center leading-tight text-white drop-shadow-lg">
        Welcome to the Game
      </h2>
      <p className="text-2xl font-bold font-mono mt-2 mb-20 text-center leading-tight text-white drop-shadow-lg">
        Enjoy playing the game
      </p>
    </>
  );
};

const Play = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center px-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Welcome />
        <div className="border-[#1c1c1c3c] border-10 ">
          <Game />
        </div>
      </div>
    </>
  );
};

export default Play;
