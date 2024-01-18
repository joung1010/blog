import React from 'react';
import {getPostData} from "@/service/posts/posts";
import Markdown from "react-markdown";
import MarkDownViewer from "@/components/common/markdown/MarkDownViewer";


type Props = {
    params: {
        slug: string;
    };
};

async function PostDetailPage({params:{slug}}:Props) {
    const post = await getPostData(slug);
    return (
        <div>
            {/*테일윈드를 사용하면 기본적으로 CSS가 초기화 된다.*/}
            <h1>{post.title}</h1>
            <MarkDownViewer content={post.content}/>
        </div>
    );
}

export default PostDetailPage;