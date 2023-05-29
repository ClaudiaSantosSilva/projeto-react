import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppBar} from "./components/AppBar"
import { Home } from "./routes/Home"
import { NotepadsRoute } from "./routes/NotepadsRoute"
import { CreateNotepadRoute } from "./routes/CreateNotepadRoute"
import { ViewPostRoute } from "./routes/ViewPostRoute" 

export default function App() {
  
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ver-posts" element={<NotepadsRoute />} />
          <Route path="/criar-posts" element={<CreateNotepadRoute />} />
          <Route path="/ver-post/:id" element={<ViewPostRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


