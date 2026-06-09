import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cartItems } from "@/data/carts"
import { Icons } from "../icons"
import { ScrollArea } from "@/components/ui/scroll-area"
import CartItem from "../carts/CartItem"
import { formatPrice } from "@/lib/utils"

export default function CartSheet() {
    const itemCount = 4;
    const amountTotal = 190;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <Badge variant="destructive" className="absolute -top-2 -right-2 size-6 justify-center rounded-full p-2.5">
                        {itemCount}
                    </Badge>
                    <Icons.cart className="size-4" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full md:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Cart - {itemCount}</SheetTitle>
                </SheetHeader>
                <Separator className="my-2" />
                {cartItems.length > 0 ? (
                    <>
                        <ScrollArea className="my-4 h-[80vh] pb-8">
                            <div className="flex-1">
                                {cartItems.map((cart) => (
                                    <CartItem cart={cart} />
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className="flex justify-between mx-4">
                                    <span className="">Shipping</span>
                                    <span className="">Free</span>
                                </div>
                                <div className="flex justify-between mx-4">
                                    <span className="">Taxes</span>
                                    <span className="">Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between mx-4">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">{formatPrice(amountTotal.toFixed(2))}</span>
                                </div>
                            </div>
                            <SheetFooter className="mt-4">
                                <SheetClose asChild>
                                    <Button type="submit" asChild>
                                        <Link to="/checkout" >Continue to checkout</Link>
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </div>

                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full space-y-1">
                        <Icons.cart className="size-16 mb-4 text-muted-foreground mx-auto" />
                        <div className="text-xl font-medium text-muted-foreground">
                            Your cart is empty
                        </div>
                    </div>
                )}
            </SheetContent >
        </Sheet >
    )
}
