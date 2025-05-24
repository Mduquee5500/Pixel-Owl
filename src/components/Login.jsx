import owlLogo from "../assets/img/owl-export.png";
import { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false); //To do: If logged in, change card and put gif of owl running or doing something

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Signup with:", username, password);
      try {
        const res = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "COntent-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.ok) {
          alert("Account created successfully");
          setIsSignup(false);
          setUsername("");
          setPassword("");
          setConfirmPassword("");
        } else {
          alert("Signup failed");
        }
      } catch (error) {
        alert("Error");
      }
    } else {
      console.log("Login with:", username, password);
      try {
        const res = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: { "COntent-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();

        if (res.ok) {
          alert("Login Successfull");
          setUsername("");
          setPassword("");
        } else {
          alert("Login failed");
        }
      } catch (error) {
        alert("Error");
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-sm m-auto bg-[#63238d] rounded p-5 border-2 border-[#1c1c3c]">
        <header>
          <img className="w-15 mx-auto mb-5" src={owlLogo} alt="Logo" />
        </header>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-2 text-[#ffffff] font-mono"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-white bg-[#4e1b70af] border border-[#241527] rounded outline-none focus:bg-[#6c2d6d] focus:ring-2 focus:ring-indigo-500"
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              className="block mb-2 font-mono text-[#ffffff]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-white bg-[#4e1b70af] border border-[#241527] rounded outline-none focus:bg-[#6c2d6d] focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isSignup && (
            <div>
              <label
                className="block mb-2 font-mono text-[#ffffff]"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full p-2 mb-6 text-white bg-[#4e1b70af] border border-[#241527] rounded outline-none focus:bg-[#6c2d6d] focus:ring-2 focus:ring-indigo-500"
                type="password"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          <input
            className="w-full bg-[#b135d3] hover:bg-[#d85fd1] text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer transition-colors duration-200"
            type="submit"
            value={isSignup ? "Signup" : "Login"}
          />
        </form>

        <footer className="flex justify-between text-sm">
          {isSignup ? (
            <a
              className="text-[#b135d3] hover:text-[#d85fd1] font-mono text-sm transition-colors duration-200 cursor-pointer"
              onClick={() => setIsSignup(false)}
            >
              Go back
            </a>
          ) : (
            <>
              <p className="font-mono text-sm">Don't have an account yet?</p>
              <a
                className="text-[#b135d3] hover:text-[#d85fd1] font-mono text-sm transition-colors duration-200 cursor-pointer"
                onClick={() => setIsSignup(true)}
              >
                Create Account
              </a>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Login;
