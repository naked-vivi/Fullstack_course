import { Link } from "react-router-dom"

function Home() {
    return (
        <section className="flex items-center grow bg-gray-100">
            <div className="text-center p-8 md:text-left container mx-auto">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">Welcome to Our Fashion Shop.</h1>
                <p className="mb-8 text-lg text-gray-700 md:text-xl">Discover the latest trends in fashion with our curated collection of stylish clothing and accessories.</p>
                <Link to="/shop" className="px-6 py-3 text-white bg-sky-600 rounded-md hover:bg-sky-700 shadow">Get Started</Link>
            </div>
        </section>
    )
}

export default Home