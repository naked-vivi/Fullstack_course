import { Link } from "react-router-dom";
import type { MainNavItem } from "@/types";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MainNavigationProps {
    items?: MainNavItem[];
}
export default function MobileNavigation({ items }: MainNavigationProps) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-4 size-5">
                        <Icons.menu aria-hidden="true" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pl-1 pr-0 pt-9">

                </SheetContent>
            </Sheet>
        </div>
    )
}
