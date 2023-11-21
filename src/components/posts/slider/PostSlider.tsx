'use client';
import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Post} from "@/service/posts/posts";
import MobileDetect from "mobile-detect";
import Image from "next/image";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};
type Props = {
    posts: Post[];
}

function getDevice():Device {
    const md = new MobileDetect(navigator.userAgent);
    let deviceType;
    if (md.tablet()) {
        deviceType = "tablet";
    } else if (md.mobile()) {
        deviceType = "mobile";
    } else {
        deviceType = "desktop";
    }
    return deviceType;
}
function PostSlider({posts}:Props) {
    const [device, setDevice] = useState<Device>();

    return (
        <div className='my-6'>
            <h2 className="ml-4 text-2xl font-bold">You may like</h2>
            {!posts && <div>Loading...</div>}
            {posts &&
            <Carousel responsive={responsive}
                      ssr
                      deviceType={device}
                      infinite={true}
                      containerClass='carousel-container'
                      itemClass='carousel-image-item'
            >
                {
                    posts.map(({path,title,date,description,category},index)=>(
                        <div key={index} className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105 m-5'>
                            <Image src={`/images/posts/${path}.png`} alt={title} width='300' height='300'  className="w-full h-2/3"/>
                            <section className="flex flex-col items-center justify-center">
                                <div className="m-2 mr-4 self-end">{date}</div>
                                <h2 className="text-xl font-bold">{title}</h2>
                                <p>{description}</p>
                                <div className="bg-green-300 px-2 py-1 rounded-xl my-2">{category}</div>
                            </section>
                        </div>
                    ))
                }
            </Carousel>
            }
        </div>
    );
}

type Device = 'tablet' | 'mobile' | 'desktop'|string;

export default PostSlider;