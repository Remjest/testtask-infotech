import { useUsers } from '@/features/users';
import dayjs from 'dayjs';

export const UsersPage = () => {
    let {data, isError, isLoading} = useUsers();

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error!</span>
    }

    return (
        <div>
            {data?.map((user) => {
                return (
                    <div>
                        <span>{user.name}</span>
                        <img src={user.avatar} alt="" />
                        <span>{dayjs(user.createdAt).format('DD.MM.YYYY')}</span>
                    </div>
                )
                
            })}
        </div>
    );
};