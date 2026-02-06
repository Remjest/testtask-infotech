import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuthorized } from "../model/auth";

export const LoginPage = () => { 
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthorized()) {
            navigate('/users', { replace: true });
        }
    }, [navigate]);
    
    return (
        <>
            <h1>Авторизация</h1>
            <LoginForm />
        </>
    )

}