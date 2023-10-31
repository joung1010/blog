import Profile from "@/components/profile/Profile";
import FeaturedPosts from "@/components/posts/Posts";

export default async function Home() {
    return (
        <main>
            <Profile/>
           <FeaturedPosts title="Featured Posts" url="/api/featurePosts"/>
        </main>
    )
}
