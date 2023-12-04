'use client';
import React, {useEffect, useState} from 'react';
import PostsSideNav from "@/components/posts/nav/PostsSideNav";
import {ALL_CATEGORY, Post} from "@/service/posts/posts";
import Posts from "@/components/posts/Posts";


type Props = {
    posts: Post[];
    categories: string[];
}

function FilterablePosts({posts, categories}: Props) {
    const [selected, setSelected] = useState<string>(ALL_CATEGORY);
    const [filterablePosts, setFilterablePosts] = useState<Post[]>();

    useEffect(() => {
        if (selected !== ALL_CATEGORY) {
            setFilterablePosts(posts.filter(post => post.category === selected));
        } else {
            setFilterablePosts(posts);
        }
    }, [selected]);
    const handleOnclick = (category: string) => {
        setSelected(category);
    };
    return (
        <section className='flex'>
            <div className='basis-4/5 w-full'>
                <Posts posts={filterablePosts!}/>
            </div>
            <div className='basis-1/5'>
                <PostsSideNav categories={categories} selected={selected} onClick={handleOnclick}/>
            </div>
        </section>
    );
}

export default FilterablePosts;