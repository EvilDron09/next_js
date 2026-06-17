import {IPost} from "@/models/IPost";
import {it} from "node:test";
import Link from "next/link";

interface IPosts {
    item:IPost
}

export const Posts = ({item}:IPosts) => {
    return (
        <>
            <h3><Link href={`/posts/${item.id}`}>{item.id}. {item.title}</Link></h3>
        </>
    );
};
