import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
