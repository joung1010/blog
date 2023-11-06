import React from 'react';
import {BsGithub} from "react-icons/bs";
import {RxNotionLogo} from "react-icons/rx";
import Link from "next/link";

function ContactPage() {
    return (
        <section>
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
            <form>
                <label htmlFor="email">You Email</label>
                <input type="text" inputMode="email" id="email"/>
                <label htmlFor="subject">Subject</label>
                <input type="text" inputMode="text" id="subject"/>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5}></textarea>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default ContactPage;