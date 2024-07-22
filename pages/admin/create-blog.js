import { useState } from 'react'
import { useRouter } from 'next/router'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content, category, image }),
            })
            if (response.ok) {
                router.push('/admin/blogList')
            }
        } catch (error) {
            console.error('Error creating blog:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-4'>Create New Blog Post</h1>
            <div className='mb-4'>
                <label className='block mb-2'>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full p-2 border rounded'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='w-full p-2 border rounded'
                    rows='10'
                    required
                ></textarea>
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Category</label>
                <input
                    type='text'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full p-2 border rounded'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block mb-2'>Image URL</label>
                <input
                    type='text'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='w-full p-2 border rounded'
                    required
                />
            </div>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Create Blog Post
            </button>
        </form>
    )
}

export default CreateBlog