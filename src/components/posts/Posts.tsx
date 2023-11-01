'use client';
import React, {useEffect, useState} from 'react';
import {Post} from "@/service/posts/posts";
import PostCard from "@/components/postCard/PostCard";

function Posts({title,url}:{title:string,url:string}) {
    const [featuredPost,setFeaturedPost] = useState<Post[] | undefined>();
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setFeaturedPost(data)});
    },[]);
    return (
        <section>
            <h2 className="ml-4 text-2xl font-bold">{title}</h2>
            <ul className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
                {
                    featuredPost?.map((post, index) => (
                        <PostCard key={index} post={post}/>
                    ))
                }
            </ul>
        </section>
    );
}

export default Posts;