import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import { Icons } from "../icons"

function Footer() {
    return (
        <footer className="w-full border-t ml-4 lg:ml-0">
            <div className="container mx-auto pb-8 pt-6 lg:py-6">
                <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                    <section>
                        <Link to="/" className="flex items-center gap-2">
                            <Icons.logo className="size-6" aria-hidden="true" />
                            <span className="font-bold">{siteConfig.name}</span>
                        </Link>
                    </section>
                    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
                        {siteConfig.footerNav.map((foot) => (
                            <div key={foot.title} className="space-y-4">
                                <h4 className="font-medium">{foot.title}</h4>
                                <ul className="">
                                    {foot.items.map((item) => (
                                        <li key={item.title} className="">
                                            <Link to={item.href}
                                                target={item.external ? "_blank" : undefined}
                                                className="text-sm text-muted-foreground hover:text-foreground">
                                                {item.title}
                                                <span className="sr-only">{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </section>
            </div>
        </footer>
    );
}

export default Footer