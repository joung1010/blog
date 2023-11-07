'use client'
import React, {FormEvent} from 'react';
import ContactMe from "@/components/contract/ContactMe";
import ContactForm from "@/components/contract/ContactForm";

function ContactPage() {
    return (
        <section>
            <ContactMe/>
            <ContactForm/>
        </section>
    );
}

export default ContactPage;