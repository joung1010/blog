'use client';
import React from 'react';
import Image from "next/image";
import {Post} from "@/service/posts/posts";
import Link from "next/link";

function PostCard({post: {path, title, date, description, category}}: { post: Post }) {
    return (
        <li
            className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105">
            <Link href={`/posts/${path}`}>
                <Image src={`/images/posts/${path}.png`} alt={title} width='300' height='300'
                       className="w-full h-2/3"/>
                <section className="flex flex-col items-center justify-center">
                    <div className="m-2 mr-4 self-end">{date}</div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="bg-green-300 px-2 py-1 rounded-xl my-2">{category}</div>
                </section>
            </Link>
        </li>
    );
}

export default PostCard;