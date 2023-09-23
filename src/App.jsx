import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import BlogPostByID from './pages/BlogPostByID';
import MainLayout from './components/MainLayout';
import Login from './components/Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/getpostbyid/:id" element={<BlogPostByID />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;