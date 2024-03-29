import React from 'react';
import {getPostData} from "@/service/posts/posts";
import Markdown from "react-markdown";
import MarkDownViewer from "@/components/common/markdown/MarkDownViewer";
import Image from "next/image";
import {AiTwotoneCalendar} from "react-icons/ai";


type Props = {
    params: {
        slug: string;
    };
};

async function PostDetailPage({params:{slug}}:Props) {
    const {content,title,path,description,date} = await getPostData(slug);
    return (
        <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
            <Image className='w-full h-1/5 max-h-[500px]'
                src={`/images/posts/${path}.png`}
                alt={title} width={760} height={420}/>
            <section className='flex flex-col p-4'>
                <div className='flex items-center self-end text-sky-600'>
                    <AiTwotoneCalendar/>
                    <p className='font-semibold ml-2'>{date.toString()}</p>
                </div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-xl font-bold'>{description}</p>
                <div className='w-44 border-2 border-sky-500 mt-4 mb-8'></div>
                <MarkDownViewer content={content}/>
            </section>
        </article>
    );
}

export default PostDetailPage;