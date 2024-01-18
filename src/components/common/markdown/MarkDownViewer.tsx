'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({content}: { content: string }) {
   /* 이 오류 메시지는 TypeScript에서 SyntaxHighlighter 컴포넌트에 전달된 props의 타입이 SyntaxHighlighterProps 인터페이스와 일치하지 않을 때 발생합니다. 여기서 특히 ref prop의 타입 불일치가 문제를 일으키고 있는 것으로 보입니다.
        SyntaxHighlighter 컴포넌트에 대한 ref prop은 SyntaxHighlighter 인스턴스에 대한 참조를 기대하지만, 코드에서는 HTMLElement 인스턴스에 대한 참조를 사용하고 있습니다. 이는 SyntaxHighlighter 컴포넌트와 일반 HTML 요소 간의 타입 호환성 문제로 인해 발생합니다.
        이 문제를 해결하기 위해 ref와 관련된 코드를 제거하거나 적절히 수정해야 합니다. SyntaxHighlighter 컴포넌트에 ref를 사용할 필요가 없다면, 이를 전달하지 않는 것이 가장 간단한 해결책입니다.*/
    return (
        <ReactMarkdown
            className='prose max-w-none'
            remarkPlugins={[remarkGfm]}
            components={{
                code({node, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div">
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                },
                img: (image) => (
                    <Image
                        className='w-full max-h-60 object-cover'
                        src={image.src || ''}
                        alt={image.alt || ''}
                        width={500}
                        height={350}
                    />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
