import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

{/*테일윈드를 사용하면 기본적으로 CSS가 초기화 된다.*/}
function MarkDownViewer({content}: { content: string; }) {
    return (
        <ReactMarkdown
            className='prose lg:prose-xl'
            remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    );
}

export default MarkDownViewer;