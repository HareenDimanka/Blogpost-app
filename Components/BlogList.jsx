
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetchBlogPosts();
    }, []);


    const fetchBlogPosts = async () => {
        try {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogPosts(data);
        } catch (error) {
            console.error('Error fetchin blog posts: ', error);
        }
    };

    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={menu == "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu == "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu == "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu == "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>LifeStyle</button>

            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogPosts
                    .filter((item) => menu === "All" ? true : item.category === menu)
                    .map((item) => (
                        <BlogItem
                            key={item._id}
                            id={item._id}
                            image={item._image}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            viewCount={item.viewCount}
                        />
                    ))}


            </div>
        </div>
    );
};

export default BlogList