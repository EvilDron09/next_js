import type { Metadata } from 'next';
import {FC} from "react";
import {UserRender} from "@/components/users_components/UserRender";

type Props ={
    params:{id:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{

    const {id} = await params;

    return {
        title:'User page' + id
    }
}

const UserPage:FC<Props> = async ({params}) =>{
    const {id} = await params;

    return(
        <div>
            <UserRender id={id}/>
        </div>
    )
}

export default UserPage
