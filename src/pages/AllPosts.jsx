import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Fetch the posts when the component is mounted
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents)
            }
        })
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            {/* Apply the border to each PostCard */}
                            <PostCard {...post} className="border-4 border-[#44f795]" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
