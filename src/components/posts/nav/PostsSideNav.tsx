'use client';
import React, {useEffect, useState} from 'react';
import {Category} from "@/service/posts/posts";

function PostsSideNav() {
    const [categories, setCategories] = useState<Category[]>();
     useEffect(() => {
         fetch('/api/posts/nav')
             .then(res => res.json())
             .then(data => {
                 setCategories(data)
             });

     },[]);
    return (
        <ul>
            <nav>
                {
                    categories?.map((category,index)=> (
                        <li key={index}>
                            {category}
                        </li>
                    ))
                }
            </nav>
        </ul>
    );
}

export default PostsSideNav;