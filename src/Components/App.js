import "../SCSS/App.scss";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
