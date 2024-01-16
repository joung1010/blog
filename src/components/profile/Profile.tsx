'use client';
import React from 'react';
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import Link from "next/link";

export default function Profile() {
    /*
    * Image 태그 priority 속성 우선적으로 다운로드
    * */
    return (
        <section className="text-center">
            <Image className="mx-auto rounded-full"
                   priority
                   src={profile} alt="profile" width={250} height={250}/>
            <h2 className="text-3xl font-bold mt-2">Hi, Welcome to my Blog</h2>
            <p className="text-xl font-semibold">{"I'm Mason"}</p>
            <Link href='/contact'>
                <button className="font-bold bg-amber-500 py-2 px-3 rounded-xl text-center mt-2">Contact Me</button>
            </Link>
        </section>
    );
}
