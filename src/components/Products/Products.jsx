import React from 'react'
// import img1 from "../../assets/products/woman.jpg"
import img2 from "../../assets/products/woman2.png"
import img3 from "../../assets/products/woman3.avif"
import img5 from "../../assets/products/woman5.jpg"
import { FaStar } from "react-icons/fa6";


const productsData = [
    {
        id: 5,
        img: img5,
        title: "woman Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "woman westren",
        rating: 4.5,
        color: "yellow",
        aosDelay: "0",
    },
    {
        id: 3,
        img: img3,
        title: "Gogglies",
        rating: 4.8,
        color: "red",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "woman Ethnic",
        rating: 4.7,
        color: "green",
        aosDelay: "0",
    },
    {
        id: 5,
        img: img5,
        title: "woman Ethnic",
        rating: 4.2,
        color: "white",
        aosDelay: "0",
    },
]

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis enim nihil.
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                    place-items-center gap-5">
                        {
                            productsData.map((data) => {
                                return (
                                    <div
                                        data-aos="fada-up"
                                        data-aos-delay={data.aosDelay}
                                        key={data.id}
                                        className='space-y-3'
                                    >
                                        <img src={data.img}
                                        data-aos="fade-up"
                                            alt="No product image"
                                            className='h-[220px] w-[150px] object-cover rounded-md'
                                        />
                                        <div>
                                            <h3 className="font-semibold">{data.title}</h3>
                                            <p className="text-sm text-gray-600">{data.color}</p>
                                            <div className="flex items-center gap-1">
                                                <FaStar className='text-yellow-400' />
                                                <span>{data.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white
                        py-1 px-5 rounded-md">View All button</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;
