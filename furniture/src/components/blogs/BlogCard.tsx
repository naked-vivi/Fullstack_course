import type { Post } from "@/types"
import { Link } from "react-router-dom"

interface PostProps {
    posts: Post[]
}

function BlogCard({ posts }: PostProps) {
    return (
        <div className="grid grid-cols-1 px-4 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-0 my-8">
            {posts.map((post) => (
                <Link to={`/blogs/${post.id}`} key={post.id}>
                    <img src={post.image} alt="Blog Post" className="w-full rounded-2xl mb-4" />
                    <h3 className="line-clamp-1 ml-4 font-semibold">{post.title}</h3>
                    <div className="ml-4 mt-2 text-sm">
                        <span className="">by
                            <span className="font-semibold"> {post.author} </span>on
                            <span className="font-semibold"> {post.updated_at} </span>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogCard