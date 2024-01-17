'use client';
import React, {SyntheticEvent} from 'react';

type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void
}
function PostsSideNav({categories, selected, onClick}: Props) {
    const handleOnclick = (e: SyntheticEvent) => {
        const category = e.currentTarget.textContent;
        onClick(category!);
    };
    return (
        <nav className='mt-1 flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold border-b-4 border-b-cyan-400 pb-3'>Category</h2>
            <ul className='my-4 text-xl flex flex-col items-center'>
                {
                    categories?.map((category, index) => (
                        <li key={category}
                            id={category}
                            onClick={handleOnclick}
                            className={`my-1 font-medium cursor-pointer ${category === selected ? 'hover:text-cyan-400 text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            {category}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default PostsSideNav;