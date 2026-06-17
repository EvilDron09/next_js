"use client";
import {IComment} from "@/models/IComment";

import {useEffect, useState} from "react";
import {getComment} from "@/service/api-service";

interface ICommentsRenderProps {
    id: string;
}

export const CommentRender = ({id}:ICommentsRenderProps) => {

    const [comment,setComment] = useState<IComment|null>(null);



    useEffect(() => {
        getComment(id)
            .then((value)=> {setComment(value)})
    }, [id]);

    return (
        <>
            <h3>{comment?.name}</h3>
            <p>{comment?.body}</p>
            <p>{comment?.email}</p>
        </>
    );
};
