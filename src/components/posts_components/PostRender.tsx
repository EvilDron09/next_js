"use client";

import {useEffect, useState} from "react";
import {IPost} from "@/models/IPost";
import {getPost} from "@/service/api-service";

interface IPostRender {
    id:string;
}

export const PostRender = ({id}:IPostRender) => {

    const [post, setPost] = useState<IPost|null>(null);

    useEffect(() => {
        getPost(id)
            .then((value) => {setPost(value)})
    }, [id]);

    return (
        <>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
        </>
    );
};
