import React, { useState } from 'react';
import axios from 'axios';
import { useAuthDataProvider } from '../Hooks/AuthProvider';

function ProfilePage({ userId, token }) {
  const [npcId, setNpcId] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [socialMediaHandles, setSocialMediaHandles] = useState({});
  const { API, user } = useAuthDataProvider()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/profiles', {
        user_id: user.id,
        npc_id: npcId,
        bio,
        avatar_url: avatarUrl,
        social_media_handles: socialMediaHandles
      });
      console.log('Profile created:', response.data);
    } catch (error) {
      console.error('Profile creation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <h2 className="text-xl font-semibold">Create Profile</h2>
    <div>
      <input
        type="text"
        placeholder="NPC ID"
        value={npcId}
        onChange={(e) => setNpcId(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button 
      type="submit"
      className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-300"
    >
      Create Profile
    </button>
  </form>
  );
}

export default ProfilePage;