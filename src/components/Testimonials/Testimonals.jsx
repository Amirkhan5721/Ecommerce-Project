import React from 'react'
import Slider from "react-slick";
import img1 from "../../assets/testimonials/image1.jpg";
import img2 from "../../assets/testimonials/image2.jpg";
import img3 from "../../assets/testimonials/image3.jpg";
import img4 from "../../assets/testimonials/image4.jpg";

const testimonalsData = [
    {
        id: 1,
        name: "Usman Jamal",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit ea dolores quaerat tempore accusamus voluptate,
        ex aliquid? Facilis, ullam voluptatum.`,
        img: img1,
    },
    {
        id: 2,
        name: "Ahmad",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit ea dolores quaerat tempore accusamus voluptate,
        ex aliquid? Facilis, ullam voluptatum.`,
        img: img2,
    },
    {
        id: 3,
        name: "Alam",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit ea dolores quaerat tempore accusamus voluptate,
        ex aliquid? Facilis, ullam voluptatum.`,
        img: img3,
    },
    {
        id: 4,
        name: "Abdullah",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit ea dolores quaerat tempore accusamus voluptate,
        ex aliquid? Facilis, ullam voluptatum.`,
        img: img4,
    },
    
]

const Testimonals = () => {

    var setting = {
        dots: true,
        arrows: false,
        Infinity: true,
        speed: 500,
        slideToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responseive: [
            {
                breakPoint: 10000,
                setting: {
                    slideToShow: 3,
                    slideToscroll: 1,
                    infinite: true,
                },
            },
            {
                breakPoint: 1024,
                setting: {
                    slideToShow: 2,
                    slideToscroll: 1,
                    initialSlider: 2,
                },
            },
            {
                breakPoint: 640,
                setting: {
                    slideToShow: 1,
                    slideToscroll: 1,
                }
            }
        ]
    }

    return (
        <div className='py-10 mb-10'>
            <div className="container">
                <div className="text-center max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className='text-sm text-primary'>
                        What out customers are saying
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 '>
                        Lorem, ipsum dolor sit amet consectetur adipis
                        icing elit. Tempore voluptatum laborum nobis  Quas, dolores
                        voluptatem magni sapiente, doloremque alias laudantium asperiores!.
                    </p>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...setting}>
                        {testimonalsData.map((data) => (
                            <div className='mt-6'>
                                <div key={data.id}
                                    className='flex flex-col gap-4 shadow-lg py-8 rounded-xl
                                    dark:bg-slate-600 bg-primary/10 relative'>
                                    <div className="mb-4">
                                        <img src={data.img} alt="No img"
                                            className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-xs dark:text-slate-300 text-gray-500">
                                                {data.text}
                                            </p>
                                            <h1 className='tetx-xl font-bold dark:text-slate-300
                                            text-black/80 dark:text-light px-6'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">

                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Testimonals
