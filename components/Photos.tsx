'use client';

import React from 'react'
import { Gallery } from 'next-gallery'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


// const images = [
//     { src: "/Ai-Visuals/1.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/2.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/3.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/4.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/5.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/6.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/7.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/8.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/9.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/10.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/11.jpeg", aspect_ratio: 1/1 },
//     { src: "/Ai-Visuals/12.jpeg", aspect_ratio: 1/1 },
// ]

// const widths = [500, 1000, 1600]
// const ratios = [2.2, 4, 6, 8]

export default function BasicPage() {
    const list = [
        {
          title: "Orange",
          img: "/Ai-Visuals/1.jpeg",
            price: "xxx",
        },
        {
          title: "Tangerine",
          img: "/Ai-Visuals/2.jpeg",
            price: "xxx",
        },
        {
          title: "Raspberry",
          img: "/Ai-Visuals/3.jpeg",
            price: "xxx",
        },
        {
          title: "Lemon",
          img: "/Ai-Visuals/4.jpeg",
            price: "xxx",
        },
        {
        title: "Orange",
        img: "/Ai-Visuals/5.jpeg",
            price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/6.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/7.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/8.jpeg",
                price: "xxx",
        },
        {
            title: "Orange",
            img: "/Ai-Visuals/9.jpeg",
            price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/10.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/11.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/12.jpeg",
                price: "xxx",
        },
            {
            title: "Orange",
            img: "/Ai-Visuals/13.jpeg",
                price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/14.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/15.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/16.jpeg",
                price: "xxx",
        },
            {
            title: "Orange",
            img: "/Ai-Visuals/17.jpeg",
                price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/18.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/19.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/20.jpeg",
                price: "xxx",
        },
        {
            title: "Orange",
            img: "/Ai-Visuals/21.jpeg",
            price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/22.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/23.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/24.jpeg",
                price: "xxx",
        },
            {
            title: "Orange",
            img: "/Ai-Visuals/25.jpeg",
                price: "xxx",
        },
            {
            title: "Tangerine",
            img: "/Ai-Visuals/26.jpeg",
                price: "xxx",
        },
            {
            title: "Raspberry",
            img: "/Ai-Visuals/27.jpeg",
                price: "xxx",
        },
            {
            title: "Lemon",
            img: "/Ai-Visuals/28.jpeg",
                price: "xxx",
        },
        {
            title: "Orange",
            img: "/Ai-Visuals/29.jpeg",
            price: "xxx",
        },
        {
            title: "Tangerine",
            img: "/Ai-Visuals/30.jpeg",
            price: "xxx",
        },
        {
            title: "Raspberry",
            img: "/Ai-Visuals/31.jpeg",
            price: "xxx",
        },
        {
            title: "Lemon",
            img: "/Ai-Visuals/32.jpeg",
            price: "xxx",
        },
        {
        title: "Orange",
        img: "/Ai-Visuals/33.jpeg",
            price: "xxx",
    },
        {
        title: "Tangerine",
        img: "/Ai-Visuals/34.jpeg",
            price: "xxx",
    },
        {
        title: "Raspberry",
        img: "/Ai-Visuals/35.jpeg",
            price: "xxx",
    },
        {
        title: "Lemon",
        img: "/Ai-Visuals/36.jpeg",
            price: "xxx",
    },
    {
        title: "Orange",
        img: "/Ai-Visuals/37.jpeg",
        price: "xxx",
    },
        {
        title: "Tangerine",
        img: "/Ai-Visuals/38.jpeg",
            price: "xxx",
    },
        {
        title: "Raspberry",
        img: "/Ai-Visuals/39.jpeg",
            price: "xxx",
    },
        {
        title: "Lemon",
        img: "/Ai-Visuals/40.png",
            price: "xxx",
    },
        {
        title: "Orange",
        img: "/Ai-Visuals/41.png",
            price: "xxx",
    },
        {
        title: "Tangerine",
        img: "/Ai-Visuals/42.png",
            price: "xxx",
    },
        {
        title: "Raspberry",
        img: "/Ai-Visuals/43.png",
            price: "xxx",
    },
        {
        title: "Lemon",
        img: "/Ai-Visuals/44.png",
            price: "xxx",
    },
];

  return (
    <div className="gap-8 grid grid-cols-16 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[300px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-300">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

        // <div className="flex flex-col gap-10">
        //     <Gallery {...{images, widths, ratios}} />
            
        //     <Image
        //         isZoomed
        //         src="/Ai-Visuals/1.jpeg"
        //         width={500}
        //         height={500}
        //         alt="Picture of the author"
        //         classNames="m-5"
        //     />
            
        // </div>
