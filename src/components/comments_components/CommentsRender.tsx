"use client";
import {useEffect, useState} from "react";
import {IComment} from "@/models/IComment";
import {Comments} from "@/components/comments_components/Comments";
import {getComments} from "@/service/api-service";


export const CommentsRender = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments()
            .then((value) => {
                setComments(value)
            })
    }, []);
    return(
        <div>
            {
                comments.map(comment => <Comments key={comment.id} item={comment}/>)
            }
        </div>
    )
}
