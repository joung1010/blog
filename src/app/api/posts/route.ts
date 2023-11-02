import {getFeaturedPosts, getPosts} from "@/service/posts/posts";

export async function GET(request:Request) {
    const posts = await getPosts();
    return Response.json(posts);
}