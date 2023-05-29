import { axiosapi } from "../axiosapi"
import { FaSpinner } from "react-icons/fa"
import { Card } from "../components/Card"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
    <Card>
        {loading && (
        <div className="flex justify-center">
        <FaSpinner className="text-2xl text-blue-700 animate-spin" />
        </div>
        )}
        {posts.map((post) => {
          return (
            <Link to={`/ver-post/${post.id}`} 
            key={post.id} className="border-b py-2 cursor-pointer block">
              <span className="text-sm text-gray-500">
                {new Date (post.created_at).toLocaleDateString()}
              </span>
              <h2 className="text-lg font-bold leading-tight">
                {post.title}
              </h2>
              <p>{post.subtitle}</p>
            </Link>
          );
        })}
    </Card>
    
  );
}
