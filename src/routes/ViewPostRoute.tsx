import { useState, useEffect} from "react"
import { axiosapi } from "../axiosapi"
import { Card } from "../components/Card"
import { Title } from "../components/Title"
import { useParams } from "react-router-dom"

const initialPost = {
    id:0,
    title:" ",
    subtitle:" ",
    content:" ",
    created_at:" ",
}

export function ViewPostRoute(){
    const params = useParams()
    const [post,setPost] = useState(initialPost)

    async function loadPost(){
        const response = await axiosapi.get(`/notepads/${params.id}`)
        const nextPost = response.data
        setPost(nextPost)
    }

    useEffect(()=>{
        loadPost()
    },[])

    return (
    <Card>
        <div className="text-gray-400 mb-2">#{post.id}</div>
        <div className="text-gray-400">{new Date(post.created_at).toLocaleDateString()}</div>
        <Title>{post.title}</Title>
        <p className="mb-4 text-gray-500">{post.subtitle}</p>
        <p>{post.content}</p>
    </Card>
    )
}