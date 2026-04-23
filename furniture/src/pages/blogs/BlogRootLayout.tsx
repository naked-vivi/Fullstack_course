import { Outlet } from "react-router-dom";

function BlogRootLayout() {
    return (
        <div>
            
            <Outlet />
        </div>
    )
}

export default BlogRootLayout