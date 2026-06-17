import {IComment} from "@/models/IComment";
import Link from "next/link";

interface IComments {
    item:IComment
}

export const Comments = ({item}:IComments) => {
    return (
        <>
            <h3><Link href={`/comments/${item.id}`}>{item.id}. {item.name}</Link></h3>
        </>
    );
};
