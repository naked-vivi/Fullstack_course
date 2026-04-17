import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpeg"
import t3 from "../assets/t3.jpeg"
import ProductCard from "../components/ProductCard"

const products = [
    { id: 1, name: "Product 1", price: 10, image: t1 },
    { id: 2, name: "Product 2", price: 20, image: t2 },
    { id: 3, name: "Product 3", price: 30, image: t3 }
]
function Shop() {
    return (
        <section className="flex grow bg-gray-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop