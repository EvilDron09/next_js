import {IUser} from "@/models/IUser";
import Link from "next/link";

interface IUsers{
    item:IUser
}

export const Users = ({item}:IUsers) => {
    return (
        <>
            <h3><Link href={`/users/${item.id}`}>{item.id}. {item.name}</Link></h3>
        </>
    );
};
