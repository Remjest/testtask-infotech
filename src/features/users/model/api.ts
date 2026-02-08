import { User } from '@/entities/User';
import axios from 'axios';

const API_URL = 'https://6985d9de6964f10bf254b508.mockapi.io/api/users';

export const getUsers = async (): Promise<User[]> => {
    const res = await axios.get<User[]>(API_URL);
    return res.data;
};

export const createUser = async (user: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
    const res = await axios.post<User>(API_URL, user);
    return res.data;
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
    const res = await axios.put<User>(`${API_URL}/${id}`, user);
    return res.data;
};

export const deleteUser = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
