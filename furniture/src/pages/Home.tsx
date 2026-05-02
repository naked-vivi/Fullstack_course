import { Link } from "react-router-dom"
import Couch from "@/data/images/couch.png"
import { Button } from "@/components/ui/button"
import CarouselCard from "@/components/products/CarouselCard"
import { products } from "@/data/products"
import { posts } from "@/data/posts"
import BlogCard from "@/components/blogs/BlogCard"

const SamplePosts = posts.slice(0, 3);

const Title = ({
    title,
    href,
    sideText
}: {
    title: string,
    href: string,
    sideText: string
}) => (
    <div className="mt-28 mb-10 flex flex-col md:flex-row md:justify-between px-4 md:px-0">
        <h2 className="font-bold text-2xl mb-4 md:mb-0">{title}</h2>
        <Link to={href} className="text-muted-foreground font-semibold underline">
            {sideText}
        </Link>
    </div>
)

function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                {/* text  */}
                <div className="my-8 lg:mt-20 lg:mb-0 text-center lg:text-left lg:w-2/5">
                    <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 lg:text-6xl text-brand">
                        Modern Interior Design Studio
                    </h1>
                    <p className="mb-6 lg:mb-8 text-brand">
                        Furniture is an essential component of any living space, providing comfort, functionality, and style.
                    </p>
                    <div className="">
                        <Button asChild className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold">
                            <Link to="/products">Shop Now</Link>
                        </Button>
                        <Button asChild
                            variant="outline"
                            className="rounded-full px-8 py-6 text-base font-bold text-brand">
                            <Link to="/products">Explore</Link>
                        </Button>
                    </div>
                </div>
                {/* image  */}
                <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
            </div>
            <CarouselCard products={products} />
            <Title title="Recent Blog" href="/blog" sideText="View All Posts" />
            <BlogCard posts={SamplePosts} />
        </div>
    )
}

export default Home
