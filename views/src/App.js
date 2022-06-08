import "./App.css";
import "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import PostBlog from "./components/blogpost/PostBlog";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/postblog" element={ <PostBlog />} />
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
