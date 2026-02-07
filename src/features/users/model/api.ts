import { User } from '@/entities/User';
import axios from 'axios';

const API_URL = 'https://6985d9de6964f10bf254b508.mockapi.io/api/users';

export const getUsers = (): Promise<User[]> => {
    return axios.get<User[]>(API_URL).then((res) => res.data);
};

export const createUser = (user: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
    return axios.post<User>(API_URL, user).then((res) => res.data);
};

export const updateUser = (id: string, user: Partial<User>): Promise<User> => {
    return axios.put<User>(`${API_URL}/${id}`, user).then((res) => res.data);
};

