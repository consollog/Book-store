import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const getdata = async () => {
            const bookdata = await axios.get("http://localhost:3000/book")
            console.log(bookdata.data);
            const Filtrdata = bookdata.data.filter((item) => item.catagory === "free")
            setdata(Filtrdata);
        }
        getdata();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
                <h1 className="font-semibold text-xl pb-2">Free Book</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15 dark:bg-slate-900 dark:text-white ">
                <Slider {...settings}>
                    {data.map((item) => (<Cards item={item} key={item.id} />))}
                </Slider>
            </div>

        </>
    )
}

export default FreeBook
