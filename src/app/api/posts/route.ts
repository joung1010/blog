import {getFeaturedPosts} from "@/service/posts/posts";

export async function GET(request:Request) {
    const featuredPosts = await getFeaturedPosts();
    return Response.json(featuredPosts);
}