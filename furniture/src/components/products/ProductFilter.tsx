import type { Category } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
    FieldError,
} from "@/components/ui/field"

interface FilterProps {
    filterList: { categories: Category[]; types: Category[] }
    onFilterChange?: (categories: string[], types: string[]) => void
}

const FormSchema = z.object({
    categories: z.array(z.string()),
    types: z.array(z.string()),
})

export default function ProductFilter({ filterList, onFilterChange }: FilterProps) {
    const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            categories: [],
            types: [],
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Submit data . . . ", data)
        onFilterChange?.(data.categories, data.types)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FieldGroup>

                {/* Categories */}
                <FieldSet>
                    <FieldLegend className="text-base">Furniture Made By</FieldLegend>
                    {filterList.categories.map((item) => (
                        <Controller
                            key={item.id}
                            control={control}
                            name="categories"
                            render={({ field }) => (
                                <Field orientation="horizontal">
                                    <Checkbox
                                        id={`category-${item.id}`}
                                        checked={field.value?.includes(item.id.toString())}
                                        onCheckedChange={(checked) => {
                                            const current = field.value ?? []
                                            field.onChange(
                                                checked
                                                    ? [...current, item.id.toString()]
                                                    : current.filter((v) => v !== item.id.toString())
                                            )
                                        }}
                                    />
                                    <FieldLabel htmlFor={`category-${item.id}`} className="text-sm font-normal cursor-pointer">
                                        {item.label}
                                    </FieldLabel>
                                </Field>
                            )}
                        />
                    ))}
                    <FieldError errors={[errors.categories]} />
                </FieldSet>

                {/* Types */}
                <FieldSet>
                    <FieldLegend>Furniture Types</FieldLegend>
                    {filterList.types.map((item) => (
                        <Controller
                            key={item.id}
                            control={control}
                            name="types"
                            render={({ field }) => (
                                <Field orientation="horizontal">
                                    <Checkbox
                                        id={`type-${item.id}`}
                                        checked={field.value?.includes(item.id.toString())}
                                        onCheckedChange={(checked) => {
                                            const current = field.value ?? []
                                            field.onChange(
                                                checked
                                                    ? [...current, item.id.toString()]
                                                    : current.filter((v) => v !== item.id.toString())
                                            )
                                        }}
                                    />
                                    <FieldLabel htmlFor={`type-${item.id}`} className="text-sm font-normal cursor-pointer">
                                        {item.label}
                                    </FieldLabel>
                                </Field>
                            )}
                        />
                    ))}
                    <FieldError errors={[errors.types]} />
                </FieldSet>

            </FieldGroup>

            <Button type="submit" variant="outline">
                Filter
            </Button>
        </form>
    )
}

