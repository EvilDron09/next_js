import type { Metadata } from 'next';
import {FC} from "react";
import {PostRender} from "@/components/posts_components/PostRender";
type Props = {
    params:{id:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{

    const {id} = await params;

    return {
        title:'Post page'+id
    }
}

const PostPage:FC<Props> = async ({params}) =>{
    const {id} = await params;

    return(
        <div>
            <PostRender id={id}/>
        </div>
    )
}

export default PostPage
