import {Category, getPostsCategories} from "@/service/posts/posts";

export async function GET(request: Request) {
    const categories: Category[] = await getPostsCategories();
    return Response.json(categories);
}