import {getAllPosts} from "@/service/posts/posts";

export async function GET(request:Request) {
    const posts = await getAllPosts();
    return Response.json(posts);
}