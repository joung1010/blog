'use client';
import React, {SyntheticEvent} from 'react';

type Props = {
    categories: string[];
    selected: string;
    onClick : (category: string) => void
}
 function PostsSideNav({categories,selected,onClick}:Props) {
     const handleOnclick = (e:SyntheticEvent) => {
         const category = e.currentTarget.textContent;
         onClick(category!);
     };
    return (
        <ul>
            <nav>
                {
                    categories?.map((category,index)=> (
                        <li key={index}
                            onClick={handleOnclick}
                        >
                            {category}
                        </li>
                    ))
                }
            </nav>
        </ul>
    );
}

export default PostsSideNav;