import { axiosapi } from "../axiosapi"
import { FaSpinner } from "react-icons/fa"
import { useState, useEffect } from "react"

const initialPosts=[]
const initialLoading = true

export function NotepadsRoute() {
const [posts, setPosts]=useState(initialPosts)
const [loading, setLoading]=useState(initialLoading)

async function loadPosts(){
    const response = await axiosapi.get('/notepads')
    const nextPosts = response.data.notepads 
    setPosts(nextPosts)
}

useEffect(()=>{
    loadPosts() 
}, [])

useEffect (()=>{
    if(posts.length > 0){
        setLoading (false)
    }
}, [posts])


  return (
    <div className="bg-white m-4 rounded-lg shadow-md p-4">
        {loading && (
        <div className="flex justify-center">
        <FaSpinner className="text-2xl text-blue-700 animate-spin" />
        </div>
        )}
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
