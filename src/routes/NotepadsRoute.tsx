import { axiosapi } from "../axiosapi";
import { FaSpinner } from "react-icons/fa";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface IPost {
  id:number,
  author?: string,
  title:string,
  subtitle: string,
  content: string,
  created_at: string
}

const initialPosts: IPost[] = [];
const initialLoading = true;

export function NotepadsRoute() {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(initialLoading);

  async function loadPosts() {
    const response = await axiosapi.get("/notepads");
    const nextPosts = response.data.notepads;
    setPosts(nextPosts);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setLoading(false);
    }
  }, [posts]);

  return (
    <>
      {loading && (
        <div className="flex justify-center mt-2">
          <FaSpinner className="text-2xl text-blue-700 animate-spin" />
        </div>
      )}
      {posts.map((post) => {
        return (
          <Card key={post.id}>
            <Link
              to={`/ver-post/${post.id}`}
              className="py-2 cursor-pointer block"
            >
              <div className="text-gray-400 mb-2">#{post.id}</div>
              <span className="text-sm text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </span>
              <h2 className="text-lg font-bold leading-tight">{post.title}</h2>
              <p>{post.subtitle}</p>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
