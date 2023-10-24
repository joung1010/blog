'use client';
import React from 'react';
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import {useRouter} from "next/navigation";

export default function Profile() {
    const router = useRouter();
    return (
        <section className="flex flex-col items-center gap-1 my-5">
            <Image className="rounded-full"
                src={profile} alt="profile"/>
            <h2 className="text-3xl font-bold">Hi, Welcome to my Blog</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-2xl">I'm Mason</p>
            <button className=" font-medium bg-amber-500 py-2 px-3 rounded-xl text-center"
                onClick={() => {router.push('/contact')}}
            >
                Contact Me
            </button>
        </section>
    );
}
