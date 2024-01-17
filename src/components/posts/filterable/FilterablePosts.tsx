'use client';
import React, {useState} from 'react';
import PostsSideNav from "@/components/posts/nav/PostsSideNav";
import { Post} from "@/service/posts/posts";
import Posts from "@/components/posts/Posts";


type Props = {
    posts: Post[];
    categories: string[];
}
const ALL_CATEGORY = 'All posts';
function FilterablePosts({posts, categories}: Props) {
    const [selected, setSelected] = useState<string>(ALL_CATEGORY);
    const filtered = selected === ALL_CATEGORY ? posts : posts.filter(post => post.category === selected);
    const handleOnclick = (category: string) => {
        setSelected(category);
    };
    return (
        <section className='flex'>
            <section className='basis-4/5 w-full'>
                <Posts posts={filtered!}/>
            </section>
            <div className='basis-1/5'>
                <PostsSideNav categories={categories} selected={selected} onClick={handleOnclick}/>
            </div>
        </section>
    );
}

export default FilterablePosts;