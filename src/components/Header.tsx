import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between items-center px-32 my-7">
            <Link href="/">
                <h1 className="text-3xl font-bold">My Blog</h1>
            </Link>
            <nav>
                <ul className="flex gap-4 text-xl">
                    <Link href="/">
                        <li>home</li>
                    </Link>
                    <Link href="/about">
                        <li>about</li>
                    </Link>
                    <Link href="/posts">
                        <li>posts</li>
                    </Link>
                    <Link href="/contact">
                        <li>contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;