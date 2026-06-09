// import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { toast } from "sonner"

const quantitySchema = z.object({
    quantity: z
        .number()
        .min(0)
});

export default function Editable() {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
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
                <div className="flex items-center space-x-2.5 ">
                    <Button
                        type="button"
                        aria-label="Delete cart item"
                        size="icon"
                        variant="outline"
                        className="size-8"
                    >
                        <Icons.trash className="size-3" />
                    </Button>
                </div>
            </div>
        </form >
    )
}
