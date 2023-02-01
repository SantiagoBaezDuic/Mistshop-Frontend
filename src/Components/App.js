import "../SCSS/App.scss";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import AdminView from "./AdminView";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
