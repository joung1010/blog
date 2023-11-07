'use client';
import React, {FormEvent} from 'react';


function ContactForm() {

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">You Email</label>
                <input type="text" inputMode="email" id="email" />
                <label htmlFor="subject">Subject</label>
                <input type="text" inputMode="text" id="subject" />
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;