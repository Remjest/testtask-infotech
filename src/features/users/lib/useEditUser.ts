import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../model/api';
import { User } from '@/entities/User';

export const useEditUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...data }: { id: string } & Partial<User>) => updateUser(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};