import { Avatar, List } from "antd"
import { useUsers } from "../lib/useUsers";
import dayjs from "dayjs";
import UsersListWrapper from "./UsersListWrapper";
import { User } from "@/entities/User";

interface UsersListProps {
    onEditUser: (user: User) => void;
}

export const UsersList = ({ onEditUser }: UsersListProps) => {
    let {data: users, isLoading} = useUsers();

    return (
        <UsersListWrapper>
            {isLoading && <List>
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar />} title="Загрузка..." />
                    </List.Item>
                </List>
            }

            {!isLoading && <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={user => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar style={{cursor: 'pointer'}} onClick={() => onEditUser(user)} src={user.avatar} />}
                            title={<a onClick={() => onEditUser(user)}>{user.name}</a>}
                            description={`Зарегистрирован ${dayjs(user.createdAt).format('DD.MM.YYYY')}`}
                        />
                    </List.Item>
                )}
            />}
        </UsersListWrapper>
    )
}

