import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import {Post} from "@/service/posts/posts";

type Props = {
    posts: Post[];
}

function Posts({posts}: Props) {
    return (
        <ul className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
            {
                posts?.map((post, index) => (
                    <PostCard key={index} post={post}/>
                ))
            }
        </ul>
    );
}

export default Posts;