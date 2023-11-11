import React, { useState } from 'react';
import PublicHeader from '@/components/headers/PublicHeader';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import HeroCard from '@/components/cards/HeroCard';
let list = [
    {
        image: "/assets/images/1.png",
        fullImage: "/assets/images/1a.png",
        country: "South Asia",
        city: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.",
    },
    {
        image: "/assets/images/2.png",
        fullImage: "/assets/images/2a.png",
        country: "Asia",
        city: "Everest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.",
    },
    {
        image: "/assets/images/3.png",
        fullImage: "/assets/images/3a.png",
        country: "Europe",
        city: "London",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.",
    },
    {
        image: "/assets/images/4.png",
        fullImage: "/assets/images/4a.png",
        country: "Asia",
        city: "Singapore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.",
    },
]
const HomePage = () => {
    let [active, setActive] = useState(true);
    let [activeImage, setActiveImage] = useState("/assets/images/1a.png");
    let [index, setIndex] = useState(1);
    let [data, setData] = useState({
        image: "/assets/images/4.png",
        fullImage: "/assets/images/4a.png",
        country: "",
        city: "You are on a mission to discover the world, have fun",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.",
    });

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        beforeChange: (current, next) => {
            console.log("beforeChange", current, next);
        },
        afterChange: current => {
            console.log("afterChange", current, next);
            setIndex(current + 1);
            setActiveImage(list[current].fullImage)
            setData(list[current]);
            document.getElementById('animatedElement1')?.classList.remove('animate__slideInUp');

            document.getElementById('animatedElement2')?.classList.remove('animate__slideInUp');
            document.getElementById('animatedElement3')?.classList.remove('animate__slideInUp');
            document.getElementById('animatedElement4')?.classList.remove('animate__slideInUp');
            setTimeout(() => {
                document.getElementById('animatedElement1')?.classList.add('animate__slideInUp');
                document.getElementById('animatedElement2')?.classList.add('animate__slideInUp');
                document.getElementById('animatedElement3')?.classList.add('animate__slideInUp');
                document.getElementById('animatedElement4')?.classList.add('animate__slideInUp');
            }, 10);

        },
    };
    return (
        <>
            <div className="HeroSection overflow-hidden z-0" style={{ backgroundImage: `url(${activeImage})` }}>
                <div className='relative'>
                    <PublicHeader />
                    <div className="container w-full mt-5 mx-auto ">
                        <div className="flex lg:flex-row flex-col items-center contentSection h-auto z-10 ">
                            <div className='lg:w-1/2 w-full md:pr-9 '>
                                {data?.country && (
                                    <div className='flex mb-3 items-center animate__animated animate__slideInUp' id='animatedElement1'>
                                        <div>
                                            <h4 className='text-xl text-white '>{data?.country}</h4>
                                        </div>
                                        <div className='px-3'>
                                            <Image
                                                src={"/assets/icons/Line 2.png"}
                                                alt="Save"
                                                width={50}
                                                height={15}
                                            />
                                        </div>
                                    </div>
                                )}
                                <h1 className='text-white font-bold text-7xl animate__animated animate__slideInUp ' id='animatedElement2'>{data?.city}</h1>
                                <p className='text-white mt-2 font-light tracking-wider text-lg animate__animated animate__slideInUp' id='animatedElement3'>{data?.description}</p>
                                <div className='flex items-center mt-4 animate__animated animate__slideInUp' id='animatedElement4'>
                                    <div>
                                        <div className='bg-[#588F5C] mr-4 cursor-pointer flex items-center justify-center rounded-full w-[55px] h-[55px]'>
                                            <Image
                                                src={"/assets/icons/Vector 1.svg"}
                                                alt="Save"
                                                width={15}
                                                height={15}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="#" className='border greenBeforeHoverEffect p-3 px-5 md:px-20 text-white md:text-xl rounded-full'>
                                            Discover Location
                                        </Link>
                                    </div>
                                </div>
                                <div className='mt-16'>
                                    <h2 className='text-white text-5xl font-extrabold'>0{index}</h2>
                                </div>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <div className='md:w-[850px] md:pt-20 pt-10'>
                                    <Slider {...settings}>
                                        {list.map((data, index) => <HeroCard key={index} data={data} />)}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage