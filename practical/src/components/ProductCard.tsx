type ProductType = {
    id: number,
    name: string,
    price: number,
    image: string
}
const ProductCard = ({ name, price, image }: ProductType) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-48">
                <img src={image} alt={name} className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-xl font-bold">${price}</p>
            </div>
            <button className="">Add to Cart</button>
        </div>
    )
}

export default ProductCard