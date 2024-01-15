import React from 'react';
import {getPostData} from "@/service/posts/posts";
import ReactMarkdown from 'react-markdown';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    params: {
        slug: string;
    };
};

async function PostDetailPage({params:{slug}}:Props) {
    const post = await getPostData(slug);
    return (
        <div>
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
    );
}

export default PostDetailPage;