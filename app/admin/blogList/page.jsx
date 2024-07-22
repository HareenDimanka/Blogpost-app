'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const BlogList = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs')
            const data = await response.json()
            setBlogs(data)
        } catch (error) {
            console.error('Error fetching blogs:', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
            if (response.ok) {
                fetchBlogs()
            }
        } catch (error) {
            console.error('Error deleting blog:', error)
        }
    }

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-4'>Blog List</h1>
            <Link href='/admin/create-blog' className='bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block'>
                Create New Blog
            </Link>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id} className='mb-4 p-4 border rounded'>
                        <h2 className='text-xl font-bold'>{blog.title}</h2>
                        <p className='text-gray-600'>Views: {blog.viewCount}</p>
                        <div className='mt-2'>
                            <Link href={`/admin/edit-blog/${blog._id}`} className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>
                                Edit
                            </Link>
                            <button onClick={() => handleDelete(blog._id)} className='bg-red-500 text-white px-2 py-1 rounded'>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList