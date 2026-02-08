import { useNavigate } from 'react-router-dom';
import { removeToken } from '@/shared/lib/auth';
import { message } from 'antd';

export const useLogout = () => {
    const navigate = useNavigate();

    return () => {
        removeToken();
        message.success('Вы вышли из системы');
        navigate('/login', { replace: true });
    };
};