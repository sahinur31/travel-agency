import logo from './logo.svg';
import './App.css';
import Blogs from './pages/home/blogs/Blogs';
import AddBlog from './pages/Admin/AddBlog';

function App() {
  return (
    <div className="App">
      <Blogs />
      <AddBlog />
    </div>
  );
}

export default App;
