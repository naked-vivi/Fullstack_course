import { Link } from "react-router-dom"
import { Icons } from "../icons"
import type { User } from "@/types"
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface userProps {
    user: User;
}

function AuthDropDown({ user }: userProps) {
    if (!user) {
        return (
            <Button size="sm" asChild>
                <Link to="/signin">
                    Sign In
                </Link>
            </Button>
        )
    }

    const initialName = `${user.firstName.charAt(0) ?? ''}${user.lastName.charAt(0) ?? ''}`;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="size-8 rounded-full">
                    <Avatar className="size-8">
                        <AvatarImage
                            src={user.imageUrl}
                            alt={initialName}
                            className="grayscale"
                        />
                        <AvatarFallback>{initialName}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" align="end" forceMount>
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                            <p className="text-sm leading-none text-muted-foreground">{user.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link to="/dashboard">
                            <Icons.dashboard className="size-4 mr-2" />
                            Dashboard
                            <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                        <Link to="/settings">
                            <Icons.gear className="size-4 mr-2" />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link to="/login">
                        <Icons.exit className="size-4 mr-2" />
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AuthDropDown