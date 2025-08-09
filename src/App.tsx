import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup/signup";
import { Login } from "./pages/login/login"
import  Landing  from "./pages/landing/landing";
import Index from "./pages/home";
import Tasks from "./pages/tasks";
import Chat from "./pages/chat";
import Post from "./pages/post";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Index />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/post" element={<Post />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
