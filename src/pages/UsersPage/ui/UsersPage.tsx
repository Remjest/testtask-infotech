import { UsersList } from '@/features/users';
import UserPageWrapper from './UserPageWrapper';
import { Button, Modal } from 'antd';
import { useLogout } from '@/features/auth';
import { useState } from 'react';
import { User } from '@/entities/User';

export const UsersPage = () => {

    const handleLogout = useLogout();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    return (
        <UserPageWrapper>
            <UsersList  onEditUser={setEditingUser}/>
            <Button type="primary" onClick={handleLogout}>Выход</Button>
            <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>Создать пользователя</Button>

            <Modal
                title="Создание пользователя"
                open={isCreateModalOpen}
                onOk={() => {}}
                onCancel={() => setIsCreateModalOpen(false)}
            >
            </Modal>

            {editingUser && (
                <Modal
                    title="Редактирование пользователя"
                    open={!!editingUser}
                    onOk={() => {}}
                    onCancel={() => setEditingUser(null)}
                >
                    <div>{editingUser.name}</div>
                </Modal>
            )}
        </UserPageWrapper>
    );
};