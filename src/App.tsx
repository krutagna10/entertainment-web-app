import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
