import { useState } from "react";

type ProductType = {
    id: number,
    name: string,
    price: number,
    image: string
}
const ProductCard = ({ name, price, image }: ProductType) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    }
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative w-full h-48">
                {!imageLoaded && (
                    <div className="animate-pulse inset-0 absolute rounded-md bg-gray-100"></div>
                )}
                <img
                    src={image}
                    alt={name}
                    className={`w-full h-full object-contain rounded-md transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="flex justify-between mt-2">
                <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-600">${price}</p>
                </div>
                <button className="rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-400">Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductCard