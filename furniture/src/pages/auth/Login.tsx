import { Link } from "react-router-dom"
import { Icons } from "@/components/icons"
import Banner from "@/data/images/house.webp"
import LoginForm from "@/components/auth/LoginForm"

function Login() {
    return (
        <div className="relative">
            <Link to="/" className="flex items-center fixed top-6 left-8 text-lg font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors">
                <Icons.logo className="size-6 mr-2" />
                <span>Furniture Shop</span>
            </Link>
            <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center p-4">
                    <div className="w-full max-w-sm">
                        <LoginForm />
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <img src={Banner} alt="Furniture Shop" className="absolute inset-0 size-full object-cover" />
                </div>
            </main>
        </div>
    )
}

export default Login
