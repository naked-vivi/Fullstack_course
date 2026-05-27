import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
// import BlogPage from "./pages/blogs/Blog";
// import BlogDetailPage from "./pages/blogs/BlogDetail";
// import BlogRootLayout from "./pages/blogs/BlogRootLayout";
const BlogPage = lazy(() => import("./pages/blogs/Blog"));
const BlogDetailPage = lazy(() => import("./pages/blogs/BlogDetail"));
const BlogRootLayout = lazy(() => import("./pages/blogs/BlogRootLayout"));
import ProductPage from "./pages/products/Product";
import ProductDetailPage from "./pages/products/ProductDetail";
import ProductRootLayout from "./pages/products/ProductRootLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";

const SuspenseFallback = () => <div className="text-center">Loading...</div>

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "about",
                Component: AboutPage,
            },
            {
                path: "blogs",
                element: (
                    <Suspense fallback={<SuspenseFallback />}>
                        <BlogRootLayout />
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<SuspenseFallback />}>
                                <BlogPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: ":postId",
                        element: (
                            <Suspense fallback={<SuspenseFallback />}>
                                <BlogDetailPage />
                            </Suspense>
                        ),
                    }]
            },
            {
                path: "products",
                Component: ProductRootLayout,
                children: [
                    {
                        index: true,
                        Component: ProductPage,
                    },
                    {
                        path: ":productId",
                        Component: ProductDetailPage,
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/register",
        Component: RegisterPage,
    }
]);