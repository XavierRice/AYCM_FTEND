import React, { useState } from "react";

const ProfileForm = () => {
  const [profileData, setProfileData] = useState({
    bio: "",
    avatar_url: "",
    twitter: "",
    instagram: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          rows="3"
          placeholder="Enter your bio"
          value={profileData.bio}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="avatar_url" className="block text-sm font-medium text-gray-700">
          Avatar URL
        </label>
        <input
          type="text"
          name="avatar_url"
          id="avatar_url"
          placeholder="Enter avatar URL"
          value={profileData.avatar_url}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
          Twitter Handle
        </label>
        <input
          type="text"
          name="twitter"
          id="twitter"
          placeholder="Enter Twitter handle"
          value={profileData.twitter}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
          Instagram Handle
        </label>
        <input
          type="text"
          name="instagram"
          id="instagram"
          placeholder="Enter Instagram handle"
          value={profileData.instagram}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
};

export default ProfileForm;