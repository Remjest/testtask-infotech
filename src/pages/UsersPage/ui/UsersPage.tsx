import { UsersList } from '@/features/users';
import UserPageWrapper from './UserPageWrapper';
import { Button } from 'antd';
import { useLogout } from '@/features/auth';

export const UsersPage = () => {

    const handleLogout = useLogout();

    return (
        <UserPageWrapper>
            <UsersList />
            <Button type="primary" onClick={handleLogout}>Выход</Button>
            <Button type="primary" >Создать пользователя</Button>
        </UserPageWrapper>
    );
};