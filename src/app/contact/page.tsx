'use client'
import React, {FormEvent} from 'react';
import ContactMe from "@/components/contract/ContactMe";
import ContactForm from "@/components/contract/ContactForm";

function ContactPage() {
    return (
        <section className='flex flex-col justify-center items-center'>
            <ContactMe/>
            <ContactForm/>
        </section>
    );
}

export default ContactPage;