'use client';

import React from 'react'
// import { Gallery } from 'next-gallery'
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
          title: "花椰樹 / 太極 / 蘋果 / 天空之島",
          img: "/1.jpeg",
            price: "---",
        },
        // {
        //   title: "Tangerine",
        //   img: "/2.jpeg",
        //     price: "---",
        // },
        // {
        //   title: "Raspberry",
        //   img: "/3.jpeg",
        //     price: "---",
        // },
        {
          title: "水泥盆 / 香菇樹 / 落地生根",
          img: "/4.jpeg",
            price: "---",
        },
        // {
        // title: "Orange",
        // img: "/5.jpeg",
        //     price: "---",
        // },
        //     {
        //     title: "Tangerine",
        //     img: "/6.jpeg",
        //         price: "---",
        // },
            {
            title: "飲料塔 / 龍捲風 / 青春動漫風",
            img: "/7.jpeg",
                price: "---",
        },
            {
            title: "古埃及 / 龐克 / 沙漠 / 鏡像世界",
            img: "/8.jpeg",
                price: "---",
        },
        {
            title: "蛋塔 / 鮮奶油液  / 椰子 / 木頭切面",
            img: "/9.jpeg",
            price: "---",
        },
        //     {
        //     title: "Tangerine",
        //     img: "/10.jpeg",
        //         price: "---",
        // },
            {
            title: "蘋果 / 質地轉換 / 巧克力 / 速度感",
            img: "/11.jpeg",
                price: "---",
        },
            {
            title: "杯中杯 / 甜點球 / 少年彩繪風",
            img: "/12.jpeg",
                price: "---",
        },
            {
            title: "肉品宣傳 / 中古城堡風 / 動物擬人",
            img: "/13.jpeg",
                price: "---",
        },
            {
            title: "出遊文案 / 中古魔法風 / 葉片船",
            img: "/14.jpeg",
                price: "---",
        },
        //     {
        //     title: "Raspberry",
        //     img: "/15.jpeg",
        //         price: "---",
        // },
            {
            title: "肉品 / 海浪 / 雲朵 / 質地換置",
            img: "/16.jpeg",
                price: "---",
        },
            {
            title: "火箭爐烤肉 / 中古世紀軍風 / 騎士魂",
            img: "/17.jpeg",
                price: "---",
        },
        //     {
        //     title: "Tangerine",
        //     img: "/18.jpeg",
        //         price: "---",
        // },
            {
            title: "生鮮魚貨 / 輕巧提袋包裝",
            img: "/19.jpeg",
                price: "---",
        },
            {
            title: "香料長米 / 袋裝",
            img: "/20.jpeg",
                price: "---",
        },
        {
            title: "香料長米 / 真空",
            img: "/21.jpeg",
            price: "---",
        },
            {
            title: "童心未泯 / 平面意象",
            img: "/22.jpeg",
                price: "---",
        },
            {
            title: "童心未泯 / 袋裝糖果",
            img: "/23.jpeg",
                price: "---",
        },
            {
            title: "睡袋發想 / 睡得像小孩",
            img: "/24.jpeg",
                price: "---",
        },
        //     {
        //     title: "Orange",
        //     img: "/25.jpeg",
        //         price: "---",
        // },
        //     {
        //     title: "Tangerine",
        //     img: "/26.jpeg",
        //         price: "---",
        // },
            {
            title: "睡袋發想 / 安心得像小孩",
            img: "/32.jpeg",
                price: "---",
        },
        //     {
        //     title: "Lemon",
        //     img: "/28.jpeg",
        //         price: "---",
        // },
        // {
        //     title: "Orange",
        //     img: "/29.jpeg",
        //     price: "---",
        // },
        // {
        //     title: "Tangerine",
        //     img: "/30.jpeg",
        //     price: "---",
        // },
        {
            title: "袋裝飲料 / 古早味 / 束帶換葉子",
            img: "/31.jpeg",
            price: "---",
        },
        {
            title: "棒棒糖發想 / 打開童心",
            img: "/27.jpeg",
            price: "---",
        },
    //     {
    //     title: "Orange",
    //     img: "/33.jpeg",
    //         price: "---",
    // },
        {
        title: "兒童濕紙巾 / 夢幻芭比",
        img: "/34.jpeg",
            price: "---",
    },
        {
        title: "兒童尿布 / 美人魚",
        img: "/35.jpeg",
            price: "---",
    },
    //     {
    //     title: "Lemon",
    //     img: "/36.jpeg",
    //         price: "---",
    // },
    {
        title: "香料包 / 乾燥蔬菜收納",
        img: "/37.jpeg",
        price: "---",
    },
    //     {
    //     title: "Tangerine",
    //     img: "/38.jpeg",
    //         price: "---",
    // },
        {
        title: "水果分裝 / 健康飲食",
        img: "/39.jpeg",
            price: "---",
    },
    //     {
    //     title: "Lemon",
    //     img: "/40.png",
    //         price: "---",
    // },
        {
        title: "紫羅蘭 / 貓侍衛 / 大狗肌肉",
        img: "/41.png",
            price: "---",
    },
        {
        title: "海螺 / 藻類 / 匕首 / 長頸鹿",
        img: "/42.png",
            price: "---",
    },
        {
        title: "生命之樹盆 / 指導靈 / 仙桃",
        img: "/43.png",
            price: "---",
    },
        {
        title: "海獅樹 / 花根錯置 / 幾何",
        img: "/44.png",
            price: "---",
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
        //         src="/1.jpeg"
        //         width={500}
        //         height={500}
        //         alt="Picture of the author"
        //         classNames="m-5"
        //     />
            
        // </div>
