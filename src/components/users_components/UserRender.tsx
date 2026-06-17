"use client"

import {useEffect, useState} from "react";
import {IUser} from "@/models/IUser";
import {getUser} from "@/service/api-service";

interface IUserRender{
    id:string
}

export const UserRender = ({id}:IUserRender) => {

    const [user,setUser] = useState<IUser|null>(null);

    useEffect(() => {
        getUser(id)
            .then((value)=>{setUser(value)})
    }, [id]);

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
