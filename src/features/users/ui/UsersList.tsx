import { Avatar, List } from "antd"
import { useUsers } from "../lib/useUsers";
import dayjs from "dayjs";
import UsersListWrapper from "./UsersListWrapper";

export const UsersList = () => {
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
                            avatar={<Avatar src={user.avatar} />}
                            title={<a href="https://ant.design">{user.name}</a>}
                            description={`Зарегистрирован ${dayjs(user.createdAt).format('DD.MM.YYYY')}`}
                        />
                    </List.Item>
                )}
            />}
        </UsersListWrapper>
    )
}

