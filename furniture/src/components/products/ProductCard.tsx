import { Link } from "react-router-dom"
import { Icons } from "../icons"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ProductCardProps {
    product: Product
}
function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="size-full overflow-hidden rounded-lg ">
            <Link to={`/products/${product.id}`}>
                <CardHeader className="border-b p-0">
                    <AspectRatio ratio={1 / 1} className="bg-muted">
                        <img src={product.images[0]}
                            alt="product image"
                            className="size-full object-cover"
                            loading="lazy"
                        />
                    </AspectRatio>
                </CardHeader>
                <CardContent className="space-y-1.5 p-4">
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-1">
                        ${product.price}
                        {product.discount && (
                            <span className="ml-2 font-extralight line-through">
                                ${product.discount}
                            </span>
                        )}
                    </CardDescription>
                </CardContent>
            </Link>
            <CardFooter className="p-4 pt-1">
                {product.status === "sold" ? (
                    <Button size="sm" disabled={true} className="w-full h-8 rounded-sm font-bold">
                        Sold Out
                    </Button>
                ) : (
                    <Button size="sm" className="w-full h-8 rounded-sm font-bold bg-brand">
                        <Icons.plus className="" />
                        Add to Cart
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default ProductCard