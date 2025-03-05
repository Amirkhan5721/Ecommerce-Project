import img1 from "../../assets/TopProducts/shirt1.jpg";
import img2 from "../../assets/TopProducts/shirt2.jpg";
import img3 from "../../assets/TopProducts/shirt3.jpg";
import { FaStar } from "react-icons/fa6";

const productsData = [
    {
        id: 1,
        img: img1,
        title: "Causal Wear",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        non quis dolorem commodi eaque. Nostrum tempora beatae aliquam! Quod, dolores.`
    },
    {
        id: 2,
        img: img2,
        title: "Printed Shirts",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        non quis dolorem commodi eaque. Nostrum tempora beatae aliquam! Quod, dolores.`
    },
    {
        id: 3,
        img: img3,
        title: "Causal Wear",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        non quis dolorem commodi eaque. Nostrum tempora beatae aliquam! Quod, dolores.`
    }
]
const TopProducts = ({ handleOrderPopop }) => {
    return (
        <div className="container">
            <div className="text-left mg-24">
                <p className="text-sm text-primary"
                    data-aos="fade-up">Top Rated Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Best Products
                </h1>
                <p className="text-xs text-gray-400"
                    data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium animi nemo rem assumenda dolor,
                    aspernatur nostrum explicabo ullam facilis harum ducimus!
                </p>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20
                    md:gap-5 place-items-center">
                        {productsData.map((data) => (
                            <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800
                            hover:bg-black/80 dark:hover:bg-primary hover:text-white relative
                            shadow-xl duration-300 group max-w-[300px] text-center"
                            >
                                <div>
                                    <img src={data.img} alt="no image" className="max-w-[140px]
                                    block mx-auto transform -translate-y-20 group-hover:scale-105
                                    duration-300 drop-shadow-md" />
                                </div>
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300
                                text-sm line-clamp-2">{data.description}</p>
                                <button className="bg-primary hover:scale-105 duration-300 text-white
                                py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary
                                " onClick={handleOrderPopop}>
                                    Order Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts;
