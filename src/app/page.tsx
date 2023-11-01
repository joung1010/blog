import Profile from "@/components/profile/Profile";
import FeaturedPosts from "@/components/posts/Posts";
import PostSlider from "@/components/posts/slider/PostSlider";

export default async function Home() {
    return (
        <main>
            <Profile/>
           <FeaturedPosts title="Featured Posts" url="/api/featurePosts"/>
            <PostSlider/>
        </main>
    )
}
