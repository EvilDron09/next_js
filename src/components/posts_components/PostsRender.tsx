"use client";

import {useEffect, useState} from "react";
import {IPost} from "@/models/IPost";
import {getPosts} from "@/service/api-service";
import {Posts} from "@/components/posts_components/Posts";

export const PostsRender = () => {

    const [ posts, setPosts ] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts()
            .then((value) =>{
                setPosts(value)
            })
    }, []);

    return (
        <>
            {
                posts.map(post => <Posts key={post.id} item={post}/>)
            }
        </>
    );
};
