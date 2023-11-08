'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import * as yup from 'yup';

function ContactForm() {
    const [send, setSend] = useState<Send>({email:'',subject:'', message: ''});
    const onHandleChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setSend((send) => ({...send, [name]: value}));
    };

    const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await schema.isValid(send);
        if (!isValid) {
            alert('필수 입력 사항을 모두 입력해주세요.');
            return;
        }
        fetch('/api/send/mail',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(send),
        })
            .then(response => response.json())
            .then(data => {console.log(data)})
            .catch(error => console.error(error));

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">You Email</label>
                <input type="text" name="email" autoComplete="email" required  placeholder="Email Address" onChange={onHandleChange}/>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" placeholder="Subject" required autoComplete="subject" onChange={onHandleChange}/>
                <label htmlFor="message">Message</label>
                <textarea rows={5} name="message" autoComplete="message" required placeholder="Message" onChange={onHandleChange}/>
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
const schema = yup.object().shape({
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});
export default ContactForm;