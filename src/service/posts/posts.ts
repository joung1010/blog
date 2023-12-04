import path from "path";
import {promises} from "fs";

export type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    path: string;
    featured: boolean;
}

export const ALL_CATEGORY = 'All posts';

export async function getFeaturedPosts():Promise<Post[]> {
    const posts = await readPosts();
    return posts.filter(post => post.featured);
}

export async function getPosts():Promise<Post[]> {
    const posts = await readPosts();
    return posts.filter(post => !post.featured);
}

export async function getAllPosts():Promise<Post[]> {
    return await readPosts();
}


 async function readPosts():Promise<Post[]> {
    const file = path.join(process.cwd(), 'data', 'posts.json');
    const posts =await promises.readFile(file, 'utf-8');
    return JSON.parse(posts);
}

