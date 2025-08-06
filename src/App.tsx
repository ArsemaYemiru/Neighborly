import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tasks from "./pages/tasks";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
