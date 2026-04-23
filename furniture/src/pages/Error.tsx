import Header from "@/components/layouts/Header"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"


function Error() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4">
                <Card className="w-100 md:w-100 lg:w-125">
                    <CardHeader>
                        <CardTitle className="text-center">Oops!</CardTitle>
                        <CardDescription className="text-center">
                            An unexpected error has occurred. Please try again later or contact support if the problem persists.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center">
                        <Button variant="outline" asChild>
                            <Link to="/"> Go to Home</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}

export default Error
