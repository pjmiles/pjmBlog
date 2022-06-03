import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Body from './components/Body';
import PostBlog from './components/PostBlog';

function App() {
  return (
    <div className="">
      <Navbar />
      <Body />
      <PostBlog />
    </div>
  );
}

export default App;
