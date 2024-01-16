import Profile from "@/components/profile/Profile";
import FeaturedPosts from "@/components/posts/featured/FeaturedPosts";
import PostSlider from "@/components/posts/slider/PostSlider";
import React from "react";
import {getAllPosts} from "@/service/posts/posts";

export default async function Home() {
    const posts = await getAllPosts();
    return (
        <section>
            <Profile/>
            <FeaturedPosts/>
            <PostSlider posts={posts}/>
        </section>
    )
}
