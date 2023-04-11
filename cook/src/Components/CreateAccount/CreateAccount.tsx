import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateAccountFetch } from "../../Services/DataService";


export default function CreateAccount() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = () => {
        let userData = {
            Id: 0,
            Username,
            Password
        }
        console.log(userData);
        CreateAccountFetch(userData);
    }


    return (
        <>
            <br></br>
            <br></br>
            <div className="grid gap-4 grid-cols-2 header p-5  border-black border  mb-24 ">
                <div className="text-5xl font-lobster ">Create Account</div>
            </div>
            <h1 className="text-center title text-5xl font-lobster p-5 ">Cook Ease</h1>
            <h1 className="text-center title text-4xl font-Noto Serif p-4">Create an Account</h1>
            {/* <div className="flex items-center justify-center">
                <label className="block p-3 ">
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                </label>
            </div> */}
            <div className="flex items-center justify-center">
                <label className="block p-3">
                    <input type="text" name="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Username "
                    onChange={ ({target: {value}}) => setUsername(value) }
                    />
                </label>
            </div>
            <div className="flex items-center justify-center">
                <label className="block p-3">
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="password" 
                    onChange={ (e) => setPassword(e.target.value) }
                    />
                </label>
            </div>
            {/* <div className="flex items-center justify-center">
                <label className="block pt-3">
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="confirm password" />
                </label>
            </div> */}
            <p className="text-center text-xs ml-28 " >Already have an account? login</p>
            <div className="flex items-center justify-center p-5">
                <button className="px-4 py-2 justify-stretch text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out w-72"
                onClick={handleSubmit}
                >
                    SIGN IN
                </button>
            </div>
        </>
    );

}