import { getUsers} from "@/service/api-service";
import {Users} from "@/components/users_components/Users";

export const UsersRender = async () => {

    const users = await getUsers()
    return (
        <div>
            {
                users.map(user =><Users key={user.id} item={user}/>)
            }
        </div>
    );
};
