import owlLogo from "../assets/img/owl-export.png";
import owlGif from "../assets/img/owl-happy.gif";
import { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("Usuario logueado:", user);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        const res = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        if (res.ok) {
          setAlertMessage("Account created successfully");
          setShowAlert(true);
          setUsername("");
          setPassword("");
          setConfirmPassword("");

          setTimeout(() => {
            setShowAlert(false);
            setIsSignup(false);
          }, 3000);
        } else {
          alert("Signup failed");
        }
      } catch (error) {
        alert("Error");
      }
    } else {
      try {
        const res = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        if (res.ok) {
          login(username);
          setAlertMessage("Login successful!");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
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
      <div className="w-full max-w-sm m-auto bg-[#63238d] rounded p-5 border-[#1c1c1c3c] border-10">
        <header>
          <img
            className="w-20 mx-auto mb-5"
            src={user ? owlGif : owlLogo}
            alt="Logo"
          />
        </header>

        {showAlert && <Alert message={alertMessage} />}

        {!user && (
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
        )}

        {user && (
          <button
            onClick={() => navigate("/play")}
            className="w-full bg-[#b135d3] hover:bg-[#d85fd1] text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer transition-colors duration-200"
          >
            Play Now!
          </button>
        )}

        <footer className="flex justify-between text-sm">
          {!user &&
            (isSignup ? (
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
            ))}
        </footer>
      </div>
    </div>
  );
};

export default Login;
