export const siteConfig = {
    name: "Furniture Shop",
    description: "A Furniture Shop build with react router.",
    mainNav: [
        {
            title: "Products",
            href: "/products",
            card: [
                {
                    title: "Wooden",
                    href: "/products?categories=1",
                    description: "comfortable with Wooden furniture.",
                },
                {
                    title: "Bamboo",
                    href: "/products?categories=2",
                    description: "Build your own Bamboo furniture.",
                },
                {
                    title: "Metal",
                    href: "/products?categories=3",
                    description: "Buy our latest metal furniture.",
                },
            ],
            menu: [
                {
                    title: "Services",
                    href: "services",
                },
                {
                    title: "Blog",
                    href: "blogs",
                },
                {
                    title: "About Us",
                    href: "about",
                },
            ],
        },
    ]
}
