'use client';
import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Post} from "@/service/posts/posts";
import MobileDetect from "mobile-detect";

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
type Device = 'tablet' | 'mobile' | 'desktop'|string;

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
function PostSlider() {
    const [posts, setPosts] = useState<Post[] | undefined>();
    const [device, setDevice] = useState<Device>();
    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setDevice(getDevice());
            });
    },[]);
    return (
        <>
            {!posts && <div>Loading...</div>}
            <Carousel responsive={responsive}
                      ssr
                      deviceType={device}
                      infinite={true}
                      containerClass='carousel-container'
                      itemClass='carousel-image-item'
            >
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </Carousel>
        </>
    );
}

export default PostSlider;