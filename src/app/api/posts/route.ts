import {getFeaturedPosts, getPosts} from "@/service/posts/posts";

export async function GET(request:Request) {
    const posts = await getPosts();
    const userAgent = request.headers.get('user-agent');
    return Response.json({posts,userAgent});
}