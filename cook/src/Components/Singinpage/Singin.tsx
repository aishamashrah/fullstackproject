import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { login, getLoggedInUserData } from "../../Services/DataService";

export default function Signin() {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState("");

  const handleSubmit = async () => {
    let userData = {
      username,
      password
    };
    console.log(userData);
    let token = await login(userData);
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
  
      // Clear the UserInfo before setting a new value
      localStorage.removeItem("UserInfo");
  
      let response = await getLoggedInUserData(username);
      let userInfo = {
        id: response.id,
        name: response.username,
      };
      console.log(userInfo);
  
      localStorage.setItem("UserInfo", JSON.stringify(userInfo)); // Save the userInfo object to local storage
      navigate('/');
    }
  };

  
  
  
  
  return (
    <>
      <br></br>
      <br></br>
      <div className="grid gap-4 grid-cols-2 header p-5 border-black border mb-36">
        <div className="text-5xl font-lobster">Account</div>
      </div>
      <h1 className="text-center title text-5xl font-lobster p-5 ">Cook Ease</h1>
      <h1 className="text-center title text-4xl font-Noto Serif p-4">Sign In</h1>
      <div className="flex items-center justify-center">
        <label className="block p-5">
          <input 
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1"
            placeholder="Username"
            onChange={ ({target: {value}}) => setUsername(value) }
          />
        </label>
      </div>
      <div className="flex items-center justify-center">
        <label className="block pt-5">
          <input
            type="password"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1"
            placeholder="password"
            onChange={ ({target: {value}}) => setPassword(value) }
          />
        </label>
      </div>
      <p className="text-center text-xs ml-28 ">Don’t have an account? 
      <Link to="/Create">
            <button className="text-blue-600">sign up</button>
            </Link>
            </p>
      <div className="flex items-center justify-center mt-14">
        <button className="px-4 py-2 justify-stretch text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out w-72"
          onClick={handleSubmit}
        >
          SIGN IN
        </button>
      </div>
    </>
  );
}
