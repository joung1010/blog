import React from 'react';
import { getFeaturedPosts} from "@/service/posts/posts";
import Posts from "@/components/posts/Posts";



async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='my-4'>
            <h2 className="ml-4 my-2 text-2xl font-bold">Featured Posts</h2>
            <Posts posts={posts}/>
        </section>
    );
}

export default FeaturedPosts;