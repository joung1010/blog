'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';


function ContactForm() {
    const [send, setSend] = useState<Send>({email:'',subject:'', message: ''});
    const onHandleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setSend((send) => ({...send, [name]: value}));
    };

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(send);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">You Email</label>
                <input type="text" name="email" autoComplete="email"  placeholder="Email Address" onChange={onHandleChange}/>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" placeholder="Subject" autoComplete="subject" onChange={onHandleChange}/>
                <label htmlFor="message">Message</label>
                <textarea rows={5} name="message" autoComplete="message" placeholder="Message" onChange={onHandleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
type Send = {
    email: string;
    subject: string;
    message: string;
}
export default ContactForm;