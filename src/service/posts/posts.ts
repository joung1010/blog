import path from "path";
import {promises} from "fs";

export type Post = {
    title: string;
    description: string;
    date: string;
    category: string;
    path: string;
    featured: boolean;
};
export type PostData = Post & { content: string; };

export const ALL_CATEGORY = 'All posts';

export async function getFeaturedPosts():Promise<Post[]> {
    const posts = await readPosts();
    return posts.filter(post => post.featured);
}

export async function getPost(path:string):Promise<Post|undefined> {
    console.log(path);
    const posts = await readPosts();
    return posts.find(post => post.path === path);
}

export async function getAllPosts():Promise<Post[]> {
    return await readPosts();
}
export async function getPostData(filePath:string):Promise<PostData> {
    const file = path.join(process.cwd(),'data','posts',`${filePath}.md`);
    const metaData = await getAllPosts()
        .then(posts => posts.find(post => post.path === filePath));
    if(!metaData) throw new Error(`${filePath}에 해당하는 파일을 찾을 수 없음`)
    const content = await promises.readFile(file, 'utf-8');
    return {...metaData, content};
}


 async function readPosts():Promise<Post[]> {
    const file = path.join(process.cwd(), 'data', 'posts.json');
    const posts =await promises.readFile(file, 'utf-8');
    return JSON.parse(posts);
}

