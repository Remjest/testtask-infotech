import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { login } from '../model/api';
import { setToken } from '@/shared';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ({ username, password }: { username: string; password: string }) => login(username, password),
        onSuccess: (token) => {
            setToken(token);
            message.success('Успешный вход!');
            navigate('/users', { replace: true });
        },
        onError: (error: Error) => {
            message.error(error.message);
        },
    });
};