
import {Metadata} from "next";
import {FC} from "react";
import {CommentRender} from "@/components/comments_components/CommentRender";



type Props ={
    params:{id:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {

    const {id} = await params;

    return {
        title: 'Comment page' + id
    }
}

const CommentPage: FC<Props> = async ({params}) =>{
    const {id} = await params;

    return(
        <div>
                <CommentRender id={id}/>
        </div>
    )
}

export default CommentPage
