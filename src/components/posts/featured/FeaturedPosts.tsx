import React from 'react';
import {getAllPosts} from "@/service/posts/posts";
import Posts from "@/components/posts/Posts";



async function FeaturedPosts() {
    const posts = await getAllPosts();
    return (
        <section>
            <h2 className="ml-4 text-2xl font-bold">Featured Posts</h2>
            <Posts posts={posts.filter(post => post.featured)}/>
        </section>
    );
}

export default FeaturedPosts;