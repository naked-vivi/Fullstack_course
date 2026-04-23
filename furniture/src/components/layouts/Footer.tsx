import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import { Icons } from "../icons"

function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="container mx-auto">
                <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                    <section>
                        <Link to="/" className="flex items-center gap-2">
                            <Icons.logo className="size-6" aria-hidden="true" />
                            <span className="font-bold">{siteConfig.name}</span>
                        </Link>
                    </section>
                    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">Loop Menu</section>
                </section>
            </div>
        </footer>
    );
}

export default Footer