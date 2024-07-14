import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { AuthData } from '../Hooks/AuthProvider';
import logoPic from '../assets/logoPic.png'
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [createProfile, setCreateProfile] = useState(false);
    const { API, setUser, setToken } = useContext(AuthData);
    const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:3400";

    const handleSignUp = async (userData) => {
        try {
            const response = await API.post(`${backend}/users`, userData);
            console.log("Sign-up response:", response.data);
            const { user, token } = response.data;
            setUser(user);
            setToken(token);
            // Storing token in da localStorage
            localStorage.setItem("token", token);

            const from = location.state?.from || "/";
            navigate(from);
        } catch (error) {
            console.error("Sign-up error:", error);
        }
    };

    const handleProfile = async (profileData) => {

        try {
            const response = await API.post(`${backend}/profiles`, profileData);
            console.log("Profile response:", response.data);
            navigate("/");
        } catch (error) {
            console.error("Profile error:", error);
        }

    }


    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="p-4">
                <p className="mx-4">Welcome</p>
                <h2 className="mx-4 text-2xl font-bold">Join the Crew!</h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 lg:w-1/3 text-center mb-4 md:mb-0">
                        <img src={logoPic} alt="Sign Up" className="max-w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 lg:w-1/3">
                        <SignUpForm onSubmit={handleSignUp} setCreateProfile={setCreateProfile} createProfile={createProfile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;