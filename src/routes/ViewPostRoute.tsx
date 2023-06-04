import { useState, useEffect} from "react"
import { axiosapi } from "../axiosapi"
import { Card } from "../components/Card"
import { Title } from "../components/Title"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { LinkButton } from "../components/LinkButton"
import toast from "react-simple-toasts"

const initialPost = {
    id:0,
    title:" ",
    subtitle:" ",
    content:" ",
    created_at:" ",
}

export function ViewPostRoute(){
    const params = useParams()
    const navigate = useNavigate()
    const [post,setPost] = useState(initialPost)

    async function loadPost(){
        const response = await axiosapi.get(`/notepads/${params.id}`)
        const nextPost = response.data
        setPost(nextPost)
    }

    async function deletePost(){
        const response = await axiosapi.delete(`/notepads/${params.id}`);
        if (response.data.success === true){
        toast(`O post #${post.id} foi deletado com sucesso!`);
        navigate("/ver-posts");
        } else {
            toast ("Houve um erro ao deletar o post")
        }
    }
     
    useEffect(()=>{
        loadPost()
    },[])

    return (
      <Card className="md:w-4/5 lg:w-5/6 mx-20">
        <div className="flex justify-end">
          <Button className="bg-red-500 hover:bg-red-700" onClick={deletePost}>
            Deletar
          </Button>
          <LinkButton className="bg-amber-200 hover:bg-amber-400" to={`/editar-post/${params.id}`}>Editar</LinkButton>
        </div>
        <div className="text-gray-400 mb-2">#{post.id}</div>
        <div className="text-gray-400">
          {new Date(post.created_at).toLocaleDateString()}
        </div>
        <Title>{post.title}</Title>
        <p className="mb-4 text-gray-500">{post.subtitle}</p>
        <p>{post.content}</p>
        <div className="flex justify-end">
          <Button onClick={() => navigate("/ver-posts")}>Voltar</Button>
        </div>
      </Card>
    );
}