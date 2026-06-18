import {getPost} from "@/service/api-service";


interface IPostRender {
    id: string;
};

export const PostRender = async ({id}:IPostRender) => {

   const post = await getPost(id)

    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </>
    );
};
