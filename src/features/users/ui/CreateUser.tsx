import { Form, Input, Button, message } from 'antd';
import { useCreateUser } from '../lib/useCreateUser';

interface CreateUserProps {
    onSuccess: () => void;
    onCancel: () => void;
}

export const CreateUser = ({ onSuccess, onCancel }: CreateUserProps) => {
    const [form] = Form.useForm();
    const createUserMutation = useCreateUser();

    const onFinish = (values: { name: string; avatar: string }) => {
        createUserMutation.mutate(
            { ...values },
            {
                onSuccess: () => {
                    message.success('Пользователь создан');
                    form.resetFields();
                    onSuccess();
                },
            }
        );
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
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
                    { type: 'string', min: 6 }
                ]}
                required={false}
            >
                <Input />
            </Form.Item>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 24 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={createUserMutation.isPending}
                >
                Создать
                </Button>
                <Button type="primary" onClick={onCancel}>Отмена</Button>
            </div>
        </Form>
    );
};