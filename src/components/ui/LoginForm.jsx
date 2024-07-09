import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';

const LoginForm = ({ onSubmit, loginError }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, password })
    }

    return (
        <div className='form_frame'>
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username" 
                    value={username}
					onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="******************" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit" >
                        Sign In
                    </button>
                    {loginError && <ErrorMessage message={loginError} />}
                </div>
                <div className="mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#630F76" }}>
                        Join the Crew!
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;