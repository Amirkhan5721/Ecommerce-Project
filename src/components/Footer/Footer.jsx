import React from 'react'
// import { FiShoppingBag } from "react-icons/fi"
import { FaMapLocationDot } from "react-icons/fa6"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    // FaLocationArrow,
    // FaMobilAlt,
    FaShoppingBag
} from "react-icons/fa"
import { IoCall } from "react-icons/io5"

const Footer = () => {

    const footerLinks = [
        {
            title: "Home",
            link: "/#"
        },
        {
            title: "About",
            link: "/#about"
        },
        {
            title: "Contact",
            link: "/#contact"
        },
        {
            title: "Blog",
            link: "/#blig"
        },
    ];

    return (
        <div className='text-white bg-[#212529]'>
            <div className="container">
                <div data-aos="zoom-in"
                    className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left
                            text-justify mb-3 flex items-center">
                            <FaShoppingBag size="30" />
                            ShopMe
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minus idem molestiae
                            similique eligendi eos officia nam fugiat repellat sit nesciunt, magnam qu
                            obcaecati adipisci quisquam porro, velit aliquam! Neque mollitia ipsum quia.
                        </p>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Importants Links
                            </h1>
                            <ul className="flex flex-colgap-3">
                                {footerLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1
                                    duration-300 text-gray-200 p-4' key={link.title}>
                                        {link.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Links
                            </h1>
                            <ul className="flex flex-colgap-3">
                                {footerLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1
                                    duration-300 text-gray-200 p-4' key={link.title}>
                                        {link.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl' />
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaMapLocationDot />
                                <p>Peshawar, Pakistan</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <IoCall />
                                <p>+92-330-1234567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
