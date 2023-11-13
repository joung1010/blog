'use client';
import React from 'react';
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {RxNotionLogo} from "react-icons/rx";

function ContactMe() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='my-6 p-2'>
                <div className='my-3'>
                    <h2 className='text-3xl font-bold'>Contact Me</h2>
                    <p>joung4342@gmail.com</p>
                </div>
                <ul className='flex justify-center'>
                    <li className='mx-4 text-5xl'>
                        <Link href="https://github.com/joung1010">
                            <BsGithub/>
                        </Link>
                    </li>
                    <li className='mx-4 text-5xl'>
                        <Link href="https://wandering-epoxy-599.notion.site/70a622e28d7b4419bc3b5969400f2569?pvs=4">
                            <RxNotionLogo/>
                        </Link>
                    </li>
                </ul>
            </div>
            <h2 className='text-3xl font-bold'>Or Send Me an email</h2>
        </div>
    );
}

export default ContactMe;