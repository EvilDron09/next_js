import {getComment} from "@/service/api-service";

interface ICommentRender{
    id: string;
}

export const CommentRender = async({id}:ICommentRender) => {

    const comment = await getComment(id)

    return (
        <>
            <h3>{comment?.name}</h3>
            <p>{comment?.body}</p>
            <p>{comment?.email}</p>
        </>
    );
};
