import React from 'react';
import FilterablePosts from "@/components/posts/filterable/FilterablePosts";
import {getAllPosts} from "@/service/posts/posts";

async function PostsPage() {
    const posts = await getAllPosts();
    const categories = Array.from(new Set(posts.map(post => post.category)));
    return (
            <FilterablePosts posts={posts} categories={categories}/>
    );
}

export default PostsPage;