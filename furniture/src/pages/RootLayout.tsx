import { Outlet } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "@/components/layouts/Footer"

function RootLayout() {
    return (
        <div className="overflow-hidden flex flex-col min-h-screen mt-16">
            <Header />
            <main className="flex-1 ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout