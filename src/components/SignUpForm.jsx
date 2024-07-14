import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import ProfileForm from "./ProfileForm";

const SignUpForm = ({ onSubmit , setCreateProfile, createProfile }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    onSubmit({ ...userData, createProfile });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={userData.username}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={userData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={userData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="flex items-center">
          <input
            id="create-profile"
            name="create-profile"
            type="checkbox"
            checked={createProfile}
            onChange={() => setCreateProfile(!createProfile)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="create-profile" className="ml-2 block text-sm text-gray-900">
            Create profile and NPC
          </label>
        </div>

        {error && <ErrorMessage message={error} />}

        <div className="flex justify-center">
          <button
            type="submit"
            className={!createProfile ? "px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500": 'hidden'}
          >
            Sign Up
          </button>
        </div>
      </form>

      {createProfile && <ProfileForm />}
    </div>
  );
};

export default SignUpForm;