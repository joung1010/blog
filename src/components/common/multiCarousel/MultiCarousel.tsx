'use client';
import React from 'react';
import {Post} from "@/service/posts/posts";
import Carousel from "react-multi-carousel";
import PostCard from "@/components/postCard/PostCard";
import MobileDetect from "mobile-detect";

type Device = 'tablet' | 'mobile' | 'desktop' | string;

type Props = {
    children: React.ReactNode;
}

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

function MultiCarousel({children}:Props) {
    return (
        <Carousel responsive={responsive}
                  deviceType={getDevice()}
                  infinite
                  autoPlay
                  containerClass='carousel-container'
                  itemClass='carousel-image-item m-2'
        >
            {children}
        </Carousel>
    );
}

export default MultiCarousel;