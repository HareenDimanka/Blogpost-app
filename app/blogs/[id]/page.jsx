import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const BlogPost = () => {
    const [blog, setBlog] = useState(null)
    const [comments, setComments] = useState([])
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (id) {
            fetchBlog()
            fetchComments()
        }
    }, [id])

    const fetchBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/${id}`)
            if (!response.ok) {
                throw new Error('Failed to fetch blog')
            }
            const data = await response.json()
            setBlog(data)
        } catch (error) {
            console.error('Error fetching blog:', error)
        }
    }

    const fetchComments = async () => {
        try {
            const response = await fetch(`/api/blogs/${id}/comments`)
            if (!response.ok) {
                throw new Error('Failed to fetch comments')
            }
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.error('Error fetching comments:', error)
        }
    }

    if (!blog) return <div>Loading...</div>

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
            <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                layout='responsive'
                className='mb-4'
            />
            <p className='text-gray-600 mb-2'>Category: {blog.category}</p>
            <p className='text-gray-600 mb-4'>Views: {blog.viewCount}</p>
            <div className='mb-8'>{blog.content}</div>
            <h2 className='text-2xl font-bold mb-4'>Comments</h2>
            {comments.map((comment) => (
                <div key={comment._id} className='mb-4 p-4 bg-gray-100 rounded'>
                    <p>{comment.content}</p>
                    <p className='text-sm text-gray-600'>{comment.author}</p>
                </div>
            ))}
            <Link href='/blogs'>
                <a className='text-blue-500 hover:underline'>
                    Back to all blogs
                </a>
            </Link>
        </div>
    )
}

export default BlogPost
