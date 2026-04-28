import { Link } from "react-router-dom"
import Couch from "@/data/couch.png"
import { Button } from "@/components/ui/button"

function Home() {
    return (
        <div className="container mx-auto mt-16">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
                {/* text  */}
                <div className="text-center lg:text-left">
                    <h1 className="">Modern Interior Design Studio</h1>
                    <p className="">
                        Transform your space with our modern furniture designs.
                    </p>
                    <div className="">
                        <Button>
                            <Link to="/products">Shop Now</Link>
                        </Button>
                        <Button>
                            <Link to="/products">Explore</Link>
                        </Button>
                    </div>
                </div>
                {/* image  */}
                <img src={Couch} alt="Couch" className="mt-8" />
            </div>
        </div>
    )
}

export default Home