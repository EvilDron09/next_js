import {getPosts} from "@/service/api-service";
import {Posts} from "@/components/posts_components/Posts";

export const PostsRender = async () => {

    const posts = await getPosts()

    return (
        <>
            {
                posts.map(post => <Posts key={post.id} item={post}/>)
            }
        </>
    );
};
