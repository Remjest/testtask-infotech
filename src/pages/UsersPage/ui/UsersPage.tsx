import { UsersList } from '@/features/users';
import UserPageWrapper from './UserPageWrapper';
import { Button } from 'antd';

export const UsersPage = () => {

    return (
        <UserPageWrapper>
            <UsersList />
            <Button type="primary" >Выход</Button>
            <Button type="primary" >Создать пользователя</Button>
        </UserPageWrapper>
    );
};