import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { login } from '../model/api';
import { setToken } from '../model/auth';
import { Input } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import StyledLoginForm from './StyledLoginForm';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: () => login(username, password),
        onSuccess: (token) => {
            setToken(token);
            message.success('Успешный вход!');
            navigate('/users', { replace: true });
        },
        onError: (error: Error) => {
            message.error(error.message);
        },
        onSettled: () => setIsLoading(false),
    });

    const handleSubmit = (e: React.FormEvent) => {
        if (isLoading) return;
        e.preventDefault();
        setIsLoading(true);
        loginMutation.mutate();
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit}>
            <legend>Авторизация</legend>
            <Input
                name='login'
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
            />
            <Input.Password
                name='password'
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />

            <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                iconPosition='end'
            >
            Войти
            </Button>
        </StyledLoginForm>
    );
};