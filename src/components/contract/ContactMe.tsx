'use client';
import React from 'react';
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {RxNotionLogo} from "react-icons/rx";

function ContactMe() {
    return (
        <div>
            <h2>Contact Me</h2>
            <p>joung4342@gmail.com</p>
            <ul>
                <li>
                    <Link href="https://github.com/joung1010">
                        <BsGithub/>
                    </Link>
                </li>
                <li>
                    <Link href="https://wandering-epoxy-599.notion.site/70a622e28d7b4419bc3b5969400f2569?pvs=4">
                        <RxNotionLogo/>
                    </Link>
                </li>
            </ul>
            <h2>Or Send Me an email</h2>
        </div>
    );
}

export default ContactMe;