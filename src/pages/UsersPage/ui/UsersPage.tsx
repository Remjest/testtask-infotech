import { CreateUser, EditUser, UsersList } from '@/features/users';
import UserPageWrapper from './UserPageWrapper';
import { Button, Modal } from 'antd';
import { useLogout } from '@/features/auth';
import { useState } from 'react';
import { User } from '@/entities/User';

export const UsersPage = () => {

    const handleLogout = useLogout();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const [isEditModalLoading, setIsEditModalLoading] = useState(false);
    const [isCreateModalLoading, setIsCreateModalLoading] = useState(false);

    return (
        <UserPageWrapper>
            <UsersList  onEditUser={setEditingUser}/>
            <Button type="primary" onClick={handleLogout}>Выход</Button>
            <Button type="primary" onClick={() => setIsCreateModalOpen(true)}>Создать пользователя</Button>

            <Modal
                title="Создание пользователя"
                open={isCreateModalOpen}
                onCancel={() => {
                    if (!isCreateModalLoading) setIsCreateModalOpen(false);
                }}
                footer={null}
                closable={!isCreateModalLoading}
                maskClosable={!isCreateModalLoading}
            >
                <CreateUser
                    onSuccess={() => setIsCreateModalOpen(false)}
                    onCancel={() => { if (!isCreateModalLoading) setIsCreateModalOpen(false) }}
                    onLoadingChange={setIsCreateModalLoading}
                />
            </Modal>

            {editingUser && (
                <Modal
                    title="Редактирование пользователя"
                    open={!!editingUser}
                    onCancel={() => {
                        if (!isEditModalLoading) {
                            setEditingUser(null);
                        }
                    }}
                    closable={!isEditModalLoading}
                    maskClosable={!isEditModalLoading}
                    footer={null}
                >
                    <EditUser
                        user={editingUser}
                        onSuccess={() => setEditingUser(null)}
                        onCancel={() => {
                            if (!isEditModalLoading) {
                                setEditingUser(null);
                            }
                        }}
                        onLoadingChange={setIsEditModalLoading}
                    />
                </Modal>
            )}
        </UserPageWrapper>
    );
};