import {Comments} from "@/components/comments_components/Comments";
import {getComments} from "@/service/api-service";


export const CommentsRender = async () => {

    const comments = await getComments()
    return(
        <div>
            {
                comments.map(comment => <Comments key={comment.id} item={comment}/>)
            }
        </div>
    )
}
