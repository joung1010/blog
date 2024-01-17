import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import {Post} from "@/service/posts/posts";

type Props = {
    posts: Post[];
}

function Posts({posts}: Props) {
    return (
        <ul className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-4 p-4">
            {
                posts?.map((post, index) => (
                    <li key={post.path}
                        className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                    >
                        <PostCard key={index} post={post}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default Posts;