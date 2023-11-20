'use client';
import React from 'react';

type Props = {
    categories: string[];
    selected: string;
    onClick : (category: string) => void
}
 function PostsSideNav({categories,selected,onClick}:Props) {

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