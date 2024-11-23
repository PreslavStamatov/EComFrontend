import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    register: (email: string, username: string, password: string) => void;
    loginUser: (email: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => void;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(token) {
            // setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        };
        setIsReady(true);
    }, []);

    const register = async (email: string, username: string, password: string) => {
        await registerAPI(email, username, password).then((result) => {
            if(result) {
                localStorage.setItem("token", result?.data.token);
                const userObject = {
                    username: result?.data.username,
                    email: result?.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObject));
                setToken(result?.data.token);
                setUser(userObject!);
                toast.success("Login Success!");
                navigate("/");
            }
        }).catch((err) => {
            toast.warning("Server error occured!");
        });;
    };

    const loginUser = async (email: string, password: string) => {
        try {
          // Call the loginAPI function that sends the login request to the backend
          const result = await loginAPI(email, password);
      
          // Check if the result exists (meaning login was successful)
          if (result) {
            // Store the token and user information in localStorage
            localStorage.setItem("token", result?.accessToken);
            console.log('token set local storage')
            // const userObject = {
            //   username: result?.data.username,
            //   email: result?.data.email,
            // };
            // localStorage.setItem("user", JSON.stringify(userObject));
      
            // Update the state variables (e.g., setToken and setUser) for app-wide access
            setToken(result?.accessToken);
            // setUser(userObject!);
      
            // Show a success message using toast
            toast.success("Login Success!");
      
            // Navigate to the home page
            navigate("/home");
          }
        } catch (err) {
          // Handle errors during the login process (e.g., network issues, incorrect credentials)
          toast.warning("Server error occurred!");
        }
      };
      

    const isLoggedIn = () => {
        return !!user;
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ loginUser, user, token, logout, isLoggedIn, register }}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
};

export const useAuth = () => React.useContext(UserContext);