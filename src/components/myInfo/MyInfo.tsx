'use client';
import React from 'react';

function MyInfo() {
    return (
        <section className="bg-gray-200 w-2/3 my-4 p-6 flex flex-col justify-center items-center">
            <div className="w-1/3 flex flex-col justify-center items-center my-4">
                <h2 className="font-bold text-2xl">Who am I?</h2>
                <p className="text-xm font-medium">개발을 좋아하고 현재는 백앤드, 지속적으로 프론트앤드 스팩도 넓혀 가고 있음</p>
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center my-4">
                <h2 className="font-bold text-2xl">Career</h2>
                <ul className="text-center">
                    <li className="my-1 text-xm font-medium">JW Marriott SeoulConcierge(2019.03.13 ~ 2020.10.31)</li>
                    <li className="my-1 text-xm font-medium">Soledesk 학원(2021.02 ~ 2021.08)</li>
                    <li className="my-1 text-xm font-medium">Quintet Systems(2021.08.09 ~ ing)</li>
                </ul>
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center my-4">
                <h2 className="font-bold text-2xl">Skills</h2>
                <ul className="text-center">
                    <li className="my-1 text-xm font-medium">Java/Spring</li>
                    <li className="my-1 text-xm font-medium">HTML/CSS</li>
                    <li className="my-1 text-xm font-medium">SQL</li>
                    <li className="my-1 text-xm font-medium">JavaScript/TypeScript</li>
                    <li className="my-1 text-xm font-medium">React.js/NEXT.JS</li>
                </ul>
            </div>
        </section>
    );
}

export default MyInfo;