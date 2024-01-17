'use client';
import React from 'react';
import Image from "next/image";
import {Post} from "@/service/posts/posts";
import Link from "next/link";

function PostCard({post: {path, title, date, description, category}}: { post: Post }) {
    return (
        <Link href={`/posts/${path}`}>
            <article className='rounded-md overflow-hidden shadow-md'>
                <Image src={`/images/posts/${path}.png`} alt={title} width={300} height={200}
                       className="w-full h-2/3"/>
                <div className="flex flex-col items-center justify-center p-4">
                    <time className="m-2 mr-4 self-end text-gray-700">{date}</time>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className='w-full truncate text-center'>{description}</p>
                    <span className="bg-green-200 px-2 py-1 rounded-xl my-2 text-sm">{category}</span>
                </div>
            </article>
        </Link>
    );
}

export default PostCard;