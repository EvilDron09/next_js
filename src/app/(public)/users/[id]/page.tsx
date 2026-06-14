import type { Metadata } from 'next';
import {FC} from "react";

type Props = {
    params:{id:string};
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> =>{
    const {id} = await params
    return {
        title:'User page title' + id,
    }
}

const UsersPage: FC<Props> = async ({params}) =>{

    const {id} = await params;

    return (
        <div>
            User page content {id}
        </div>
    )
}
export default UsersPage;
