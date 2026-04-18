import { Link } from "react-router-dom"

function NotFound() {
    return (
        <section className="flex grow bg-gray-100 items-center">
            <div className="container mx-auto text-center md:text-left">
                <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
                <p className="mb-8 text-lg text-gray-500">Oops! The page you're looking for doesn't exist</p>
                <Link to="/" className="px-6 py-3 text-white bg-sky-600 rounded-md hover:bg-sky-700 shadow">Go back Home</Link>
            </div>
        </section>
    )
}

export default NotFound