import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppBar} from "./components/AppBar"
import { Footer } from "./components/Footer"
import { Home } from "./routes/HomeRoute"
import { PostsRoute } from "./routes/PostsRoute"
import { CreatePostRoute } from "./routes/CreatePostRoute"
import { ViewPostRoute } from "./routes/ViewPostRoute" 
import { EditPostRoute } from "./routes/EditPostRoute"
import { PostPageRoute } from "./routes/PostPageRoute"

export default function App() {
  
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ver-posts" element={<PostsRoute />} />
          <Route path="/criar-posts" element={<CreatePostRoute />} />
          <Route path="/ver-post/:id" element={<ViewPostRoute />} />
          <Route path="/editar-post/:id" element={<EditPostRoute />} />
          <Route path="/ver-posts/:page" element={<PostPageRoute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


