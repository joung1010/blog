import Link from "next/link";
import React from "react";
import PostsSideNav from "@/components/posts/nav/PostsSideNav";

export default function ProductsLayout({children,}: { children: React.ReactNode; }) {
    return (
        <>
            <PostsSideNav/>
            <section>{children}</section>
        </>
    );
}