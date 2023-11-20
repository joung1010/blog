'use client';
import React, {useEffect, useState} from 'react';
import {Post} from "@/service/posts/posts";
import PostCard from "@/components/postCard/PostCard";

type Props = {
    filter: boolean;
}
function Posts({filter}:Props) {
    const [featuredPost,setFeaturedPost] = useState<Post[] | undefined>();
    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                const posts:Post[] = [...data].filter(post =>)
            });
    },[]);
    return (
        <>

            <ul className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
                {
                    featuredPost?.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))
                }
            </ul>
        </>
    );
}

export default Posts;