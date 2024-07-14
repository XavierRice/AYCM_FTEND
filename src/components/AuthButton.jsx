import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthData } from '@/Hooks/AuthProvider';

const AuthButton = () => {
 const {logout, token } = useContext(AuthData)

  return (
    <>
      {token ? (
        <button
          onClick={logout}
          className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-large font-medium"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="text-red-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-large font-medium"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default AuthButton;
