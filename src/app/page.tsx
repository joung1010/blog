import Profile from "@/components/profile/Profile";
import FeaturedPosts from "@/components/posts/Posts";
import PostSlider from "@/components/posts/slider/PostSlider";
import React from "react";

export default async function Home() {
    return (
        <main>
            <Profile/>
            <section>
                <FeaturedPosts title="Featured Posts" url="/api/featurePosts"/>
            </section>
            <PostSlider/>
        </main>
    )
}
