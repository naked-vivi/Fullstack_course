import { Link } from "react-router-dom"
import { Icons } from "@/components/icons"
import RegisterForm from "@/components/auth/RegisterForm"

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <Link to="/" className="flex items-center fixed top-6 left-8 text-lg font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors">
                <Icons.logo className="size-6 mr-2" />
                <span>Furniture Shop</span>
            </Link>
            <div className="w-full max-w-sm">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register