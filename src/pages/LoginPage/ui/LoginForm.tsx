import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import StyledLoginForm from './StyledLoginForm';
import { useLogin } from '../lib/useLogin';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginMutation.isPending) return;
        loginMutation.mutate({ username, password });
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit}>
            <legend>Авторизация</legend>
            <Input
                name='login'
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loginMutation.isPending}
            />
            <Input.Password
                name='password'
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loginMutation.isPending}
            />

            <Button
                type="primary"
                htmlType="submit"
                loading={loginMutation.isPending}
                iconPosition='end'
                disabled={loginMutation.isPending}
            >
            Войти
            </Button>
        </StyledLoginForm>
    );
};