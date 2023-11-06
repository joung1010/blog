import React from 'react';
import Profile from "@/components/profile/Profile";
import MyInfo from "@/components/myInfo/MyInfo";

function AboutPage() {
    return (
        <section className="flex flex-col justify-center items-center">
            <Profile/>
            <MyInfo/>
        </section>
    );
}

export default AboutPage;