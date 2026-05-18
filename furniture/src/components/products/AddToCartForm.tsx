// import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const quantitySchema = z.object({
    quantity: z
        .number()
        .min(0)
});

interface canBuyProps {
    canBuy: boolean;
}

export default function AddToCartForm({ canBuy }: canBuyProps) {
    const form = useForm<z.infer<typeof quantitySchema>>({
        resolver: zodResolver(quantitySchema),
        defaultValues: {
            quantity: 1,
        },
    })

    function onSubmit(data: z.infer<typeof quantitySchema>) {
        console.log(data);
        toast.success("Product is added to cart successfully.");
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-65 gap-4 flex-col">
            <div>
                <div className="flex items-center mb-6">
                    <Button type="button" variant="outline" size="icon"
                        className="size-8 shrink-0 rounded-r-none"
                    >
                        <Icons.minus className="size-3" />
                    </Button>
                    <Controller
                        name="quantity"
                        control={form.control}
                        render={({ field }) => (
                            <div className="space-y-0">
                                <label className="sr-only">Quantity</label>
                                <Input
                                    {...field}
                                    inputMode="numeric"
                                    type="number"
                                    min={0}
                                    className="h-8 w-16 rounded-none border-x-0"
                                />
                            </div>
                        )}
                    />
                    <Button type="button" variant="outline" size="icon"
                        className="size-8 shrink-0 rounded-l-none">
                        <Icons.plus className="size-3" />
                    </Button>
                </div>
                <div className="flex items-center space-x-2.5">
                    <Button
                        type="button"
                        aria-label="Buy now"
                        size="sm"
                        className={cn("w-full bg-brand font-bold", !canBuy && "bg-slate-400")}
                    >
                        Buy Now
                    </Button>
                    <Button
                        type="submit"
                        aria-label="Add To Cart"
                        size="sm"
                        variant={canBuy ? "outline" : "default"}
                        className="w-full font-semibold"
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </form >
    )
}
