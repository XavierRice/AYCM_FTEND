import { AuthData } from '@/Hooks/AuthProvider';
import React , {useContext, useState }from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from '@/components/ui/LoginForm';


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3400'
    const { API, setUser, setToken } = useContext(AuthData)
    const [loginError, setLoginError] = useState("");
   
    const handleLogin = async (userData) => {
      try {
        const response = await API.post(`${backend}/users/login`, userData);
        console.log("Login response:", response.data);
  
        const { user, token } = response.data;
        console.log(user);
        setUser(user);
        setToken(token);
        localStorage.setItem("token", token);
        setLoginError("");
  
        const from = location.state?.from || "/";
        navigate(from);
      } catch (error) {
        setLoginError(
          "Failed to log in. Please check your username and password."
        );
        console.error("Login error:", error);
      }
    };

return (

 <LoginForm onSubmit={handleLogin} loginError={loginError}/>
)





};

export default LoginPage;