import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/portafolio/" element={<Homepage />} />
          <Route path="/portafolio/about" element={<About />} />
          <Route path="/portafolio/projects" element={<Projects />} />
          <Route path="/portafolio/articles" element={<Articles />} />
          <Route path="/portafolio/article/:slug" element={<ReadArticle />} />
          <Route path="/portafolio/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
