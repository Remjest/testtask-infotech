import { useEffect } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import { useEditUser } from '../lib/useEditUser';
import { User } from '@/entities/User';
import { useDeleteUser } from '../lib/useDeleteUser';

interface EditUserProps {
    user: User;
    onSuccess: () => void;
    onCancel: () => void;
}

export const EditUser = ({ user, onSuccess, onCancel }: EditUserProps) => {
    const [form] = Form.useForm();
    const editUserMutation = useEditUser();
    const deleteUserMutation = useDeleteUser();

    useEffect(() => {
        form.setFieldsValue(user);
    }, [user, form]);

    const onFinish = (values: Partial<User>) => {
        editUserMutation.mutate(
        { id: user.id, ...values },
        {
            onSuccess: () => {
                message.success('Пользователь обновлён');
                form.resetFields();
                onSuccess();
            },
        }
        );
    };

    const handleDelete = () => {
        Modal.confirm({
            title: 'Вы уверены?',
            content: 'Пользователь будет удалён без возможности восстановления.',
            okText: 'Удалить',
            okType: 'danger',
            cancelText: 'Отмена',
            onOk: () => {
                deleteUserMutation.mutate(user.id, {
                    onSuccess: () => {
                        message.success('Пользователь удалён');
                        onSuccess();
                    },
                });
            },
        });
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="id"
                label="id"
            >
                <Input disabled />
            </Form.Item>

            <Form.Item
                name="name"
                label="Имя"
                rules={[{ required: true, message: 'Введите имя' }]}
                required={false}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="avatar"
                label="Ссылка на аватарку"
                rules={[
                        { required: true, message: 'Введите ссылку' },
                        { type: 'url', message: 'Неверный формат URL' },
                        { type: 'string', min: 6, message: 'Ссылка слишком короткая' },
                ]}
                required={false}
            >
                <Input />
            </Form.Item>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <Button type="primary" onClick={handleDelete}>
                Удалить
                </Button>
                <Button
                    style={{ marginLeft: 'auto' }}
                    type="primary"
                    htmlType="submit"
                    loading={editUserMutation.isPending}
                >
                Сохранить
                </Button>
                <Button type="primary" onClick={onCancel}>Отмена</Button>
            </div>
        </Form>
    );
};