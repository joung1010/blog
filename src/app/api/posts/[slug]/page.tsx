import React from 'react';
import {getAllPosts, getPost, readMarkDown} from "@/service/posts/posts";
import path from "path";
import {redirect} from "next/navigation";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
type Props = {
    params: {
        slug: string;
    };
};

async function PostDetailPage({params}:Props) {
    console.log(params);
    const post = await getPost(params.slug);
    console.log(post);
    if (!post) {
        redirect('/posts');
    }
    const markdown = await readMarkDown(post.path);
    console.log(markdown);
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
    );
}
export async function generateStaticParams() {
    const posts = await getAllPosts();
    console.log(posts);
    return posts.map(post => ({slug: post.path}));
}

export default PostDetailPage;