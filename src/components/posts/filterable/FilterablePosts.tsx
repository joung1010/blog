'use client';
import React, {useState} from 'react';
import PostsSideNav from "@/components/posts/nav/PostsSideNav";
import {Post} from "@/service/posts/posts";


type Props = {
    posts: Post[];
    categories: string[];
}
function FilterablePosts({posts,categories}:Props) {
    const [selected, setSelected] = useState<string>();
    const handleOnclick = (category:string) => {
    };
    return (
        <section>
            <PostsSideNav categories={categories} selected={selected} onClick={handleOnclick}/>
            <ul>

            </ul>
        </section>
    );
}

export default FilterablePosts;