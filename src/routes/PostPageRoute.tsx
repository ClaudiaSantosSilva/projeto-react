import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosApi } from "../axiosApi";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { LinkButton } from "../components/LinkButton";

const pageSize = 10;

interface IPost {
  id: number;
  author?: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: string;
}

const initialPostsList: { notepads: IPost[]; count: number } = {
  count: 0,
  notepads: [],
};

export function PostPageRoute() {
  const params = useParams();
  const offset = (Number(params.page) - 1) * pageSize;
  const [postsList, setPostsList] = useState(initialPostsList);
  const pageCount = Math.ceil(postsList.count / pageSize);
  const pages = new Array(pageCount).fill(null).map((_, index) => index + 1);

  async function loadPosts() {
    const response = await axiosApi.get(
      `/notepads?limit=${pageSize}&offset=${offset}`
    );
    const nextPosts = response.data;
    setPostsList(nextPosts);
  }

  useEffect(() => {
    loadPosts();
  }, [params.page]);

  return (
    <>
      <div>
        <Helmet>
          <title> Ver posts página {params.page}</title>
        </Helmet>
        <Breadcrumbs
          links={[
            { href: "/", label: "Home" },
            {
              href: "/ver-posts",
              label: "Ver posts",
            },
          ]}
        />
      </div>

      {postsList.notepads.map((post) => {
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

      <div className="flex flex-row justify-center gap-2 flex-wrap pb-20 mt-10">
        {pages.map((page) => (
          <LinkButton
            key={page}
            to={`/ver-posts/${page}`}
            onClick={() => window.scrollTo(0, 0)}
            className={page === Number(params.page) ? "bg-blue-700" : ""}
          >
            {page}
          </LinkButton>
        ))}
      </div>
    </>
  );
}
