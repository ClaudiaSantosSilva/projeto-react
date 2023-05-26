import { axiosapi } from "../axiosapi"
import { useState } from "react"

const initialPosts=[]

export function NotepadsRoute() {
const [posts, setPosts]=useState(initialPosts)

async function loadPosts(){
    const response = await axiosapi.get('/notepads')
    const nextPosts = response.data.notepads 
    setPosts(nextPosts)
}

loadPosts()

  return (
    <div className="bg-white m-4 rounded-lg shadow-md p-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border-b py-2">
              <span className="text-sm text-gray-500">
                {new Date (post.created_at).toLocaleDateString()}
              </span>
              <h2 className="text-lg font-bold leading-tight">
                {post.title}
              </h2>
              <p>{post.subtitle}</p>
            </div>
          );
        })}
    </div>
    
  );
}
