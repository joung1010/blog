import "react-multi-carousel/lib/styles.css";
import {getNonFeaturedPosts} from "@/service/posts/posts";
import MultiCarousel from "@/components/common/multiCarousel/MultiCarousel";
import PostCard from "@/components/postCard/PostCard";
import React from "react";

async function PostSlider() {
    const posts = await getNonFeaturedPosts();
    return (
        <section className='my-6'>
            <h2 className="ml-4 text-2xl font-bold my-2">You may like</h2>
            <MultiCarousel>
                {
                    posts.map((post) => (
                        <PostCard post={post} key={post.path}/>
                    ))
                }
            </MultiCarousel>
        </section>
    );
}


export default PostSlider;