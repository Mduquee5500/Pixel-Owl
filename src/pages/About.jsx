import backgroundImage from "../../src/assets/img/background.png";

const Header = ({ text }) => {
  return (
    <h1 className="text-3xl font-bold font-mono mt-10 text-center leading-tight text-white drop-shadow-lg">
      {text}
    </h1>
  );
};

const About = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center px-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full max-w-150 pt-8">
          <Header text="About this project" />

          <div className="mt-6 mb-10 bg-[#63238d] bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg border-6 border-[#1c1c1c3c] border-opacity-30">
            <p className="text-white text-lg leading-relaxed font-sans">
              This game is a fun and engaging platformer developed with{" "}
              <strong>Phaser 3</strong>, a powerful and flexible JavaScript game
              framework. The frontend is built using <strong>React</strong>,
              which ensures a responsive and modular UI experience.
              <br />
              <br />
              The project leverages modern web development tools including{" "}
              <strong>JavaScript (ES6+)</strong>,{" "}
              <strong>CSS with TailwindCSS</strong> for rapid styling, and{" "}
              <strong>React hooks</strong> for managing state and lifecycle
              within components.
              <br />
              <br />
              For backend functionality, <strong>Node.js</strong> and{" "}
              <strong>Express</strong> handle score submissions and user
              authentication, with data communication done via{" "}
              <strong>RESTful APIs</strong>.
              <br />
              <br />
              Additionally, authentication context is managed using{" "}
              <strong>React Context API</strong>, demonstrating proficiency in
              React state management patterns. This combination of technologies
              showcases a solid understanding of both frontend and backend web
              development, emphasizing clean code organization and scalability.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
