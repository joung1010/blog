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
        fetch('/api/send/email',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(send),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error));
        e.currentTarget.reset();
    };

    return (
        <div className='text-center my-14 bg-sky-950 w-1/3 rounded-2xl'>
            <form className='flex flex-col font-bold p-3 font-xl'
                onSubmit={onSubmit}>
                <label htmlFor="email" className='text-left mb-2 text-white'>You Email</label>
                <input className='p-1.5' type="text" name="email" autoComplete="email" required  placeholder="Email Address" onChange={onHandleChange}/>
                <label htmlFor="subject" className='text-left mb-2 text-white'>Subject</label>
                <input className='p-1.5' type="text" name="subject" placeholder="Subject" required autoComplete="subject" onChange={onHandleChange}/>
                <label htmlFor="message" className='text-left mb-2 text-white'>Message</label>
                <textarea className='p-1.5' rows={5} name="message" autoComplete="message" required placeholder="Message" onChange={onHandleChange}/>
                <div className='my-4'>
                    <button className='w-full font-medium bg-amber-500 py-2 px-3 rounded-xl text-center' type="submit">Submit</button>
                </div>
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