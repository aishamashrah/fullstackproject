import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAccountFetch, getLoggedInUserData } from "../../Services/DataService";
import { Link } from 'react-router-dom';

interface MyError {
    message: string;
}

export default function CreateAccount() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [navBool, setNavBool] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async () => {
        let userData = {
            Id: 0,
            Username,
            Password
        };


        try {
            const { response, data } = await CreateAccountFetch(userData);
            const responseStatus = response.status;
            console.log(responseStatus);
            console.log(data);
            if (responseStatus === 200) {

                if (data === false) {
                    setErrorMessage('Username taken');
                } else {
                    console.log('Account created')
                    localStorage.removeItem("UserInfo");

                    let response = await getLoggedInUserData(Username);
                    console.log(response)
                    let userInfo = {
                        id: response.id,
                        name: response.username,
                    };
                    console.log(userInfo);

                    localStorage.setItem("UserInfo", JSON.stringify(userInfo)); // Save the userInfo object to local storage
                    navigate('/');
                    

                }
            }
        } catch (error) {
            if ((error as MyError).message) {
                setErrorMessage((error as MyError).message);
                return;
            } else {
                setErrorMessage('An unknown error occurred');
            }
        }
    };




    return (
        <>
            <br></br>
            <br></br>
            <div className="grid gap-4 grid-cols-2 header p-5  border-black border  mb-24 ">
                <div className="text-5xl font-lobster ">Create Account</div>
            </div>
            <h1 className="text-center title text-5xl font-lobster p-5 ">Cook Ease</h1>
            <h1 className="text-center title text-4xl font-Noto Serif p-4">Create an Account</h1>
            <h4 className="text-center title text-4xl font-Noto Serif p-4 text-red-500">{errorMessage}</h4>
            {/* <div className="flex items-center justify-center">
                <label className="block p-3 ">
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                </label>
            </div> */}
            <div className="flex items-center justify-center">
                <label className="block p-3">
                    <input type="text" name="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Username "
                        onChange={({ target: { value } }) => setUsername(value)}
                    />
                </label>
            </div>
            <div className="flex items-center justify-center">
                <label className="block p-3">
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <p className="text-center text-xs ml-28 " >Already have an account?
                <Link to="/Signin">
                    <button className="text-blue-600">login</button>
                </Link>
            </p>
            <div className="flex items-center justify-center p-5">

                <button className="px-4 py-2 justify-stretch text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out w-72 "
                    onClick={handleSubmit}
                >
                    SIGN IN
                </button>
            </div>
        </>
    );

}