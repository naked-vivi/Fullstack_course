import { useParams, Link } from "react-router-dom"
import { posts } from "@/data/posts"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

function BlogDetail() {
    const { postId } = useParams()
    const post = posts.find((post) => post.id === postId)
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <section className="flex flex-col lg:flex-row">
                <section className="w-full lg:w-3/4 lg:pr-16">
                    <Button variant="outline" asChild className="mb-6 mt-8">
                        <Link to="/blogs">
                            <Icons.arrowLeft />
                            All Posts
                        </Link>
                    </Button>
                    {post ? (
                        <>
                            <h2 className="text-3xl font-extrabold mb-3">{post.title}</h2>
                            <div className="text-sm">
                                <span className="">by
                                    <span className="font-semibold"> {post.author} </span>on
                                    <span className="font-semibold"> {post.updated_at} </span>
                                </span>
                            </div>
                            <h3 className="text-base font-normal my-6">{post.content}</h3>
                            <img src={post.image} alt={post.title} className="w-full rounded-xl" />
                            <p className="">{post.body}</p>
                            <div className="mb-12 space-x-2">
                                {post.tags.map((tag) => (
                                    <Button variant="secondary">
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="mb-16 mt-8 text-center text-xl fond-bold text-muted-foreground lg:mt-24">
                            No post found
                        </p>
                    )}
                </section>
                <section className="w-full lg:w-1/4 lg:mt-24">Other</section>
            </section>
        </div >
    )
}

export default BlogDetail