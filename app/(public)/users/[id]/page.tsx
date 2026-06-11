import {FC} from "react";

type Props = {
    params:{id:string};
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
