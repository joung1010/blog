import Profile from "@/components/profile/Profile";
import FeaturedPosts from "@/components/posts/Posts";
import PostSlider from "@/components/posts/slider/PostSlider";
import React from "react";
import {getAllPosts} from "@/service/posts/posts";

export default async function Home() {
    const posts = await getAllPosts();
    const featuredPosts = posts.filter(post => post.featured);
    return (
        <section>
            <Profile/>
            <section>
                <h2 className="ml-4 text-2xl font-bold">Featured Posts</h2>
                <FeaturedPosts posts={featuredPosts}/>
            </section>
            <PostSlider posts={posts}/>
        </section>
    )
}
