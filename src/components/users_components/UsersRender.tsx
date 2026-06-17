"use client"

import {useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import { getUsers} from "@/service/api-service";
import {Users} from "@/components/users_components/Users";

export const UsersRender = () => {

    const [users,setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then((value)=>{setUsers(value)})
    }, []);

    return (
        <div>
            {
                users.map(user =><Users key={user.id} item={user}/>)
            }
        </div>
    );
};
