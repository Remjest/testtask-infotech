import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthorized, removeToken } from "../model/auth";
import LoginFormWrapper from "./LoginFormWrapper";


export const LoginPage = () => { 
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthorized()) {
            navigate('/users', { replace: true });
        }
    }, [navigate]);
    
    return (
        <LoginFormWrapper>
            <LoginForm />
        </LoginFormWrapper>
    )

}