import {getUser} from "@/service/api-service";

interface IUserRender{
    id:string
}

export const UserRender = async ({id}:IUserRender) => {

    const user = await getUser(id)

    return (
        <>
            <h3>{user?.name}</h3>
            <p>{user?.username} {user?.email}</p>
            <p>{user?.phone} {user?.website}</p>
            <p>{user?.address.city},{user?.address.street},{user?.address.zipcode}</p>
            <p>{user?.company.name}, {user?.company.bs}, {user?.company.catchPhrase}</p>
        </>
    );
};
