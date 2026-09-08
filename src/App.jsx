import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Program from "./pages/Program";
import PastEvents from "./pages/PastEvents";
import Press from "./pages/Press";
import PressArticle from "./pages/PressArticle";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Directions from "./pages/Directions";
import CodeOfConduct from "./pages/CodeOfConduct";
import Gallery from "./pages/Gallery";
import Support from "./pages/Support";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="program" element={<Program />} />
          <Route path="past-events" element={<PastEvents />} />
          <Route path="press" element={<Press />} />
          <Route path="press/:slug" element={<PressArticle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="directions" element={<Directions />} />
          <Route path="code-of-conduct" element={<CodeOfConduct />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="support" element={<Support />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
