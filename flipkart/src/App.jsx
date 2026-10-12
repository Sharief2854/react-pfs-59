import "./App.css";
import AddDoctor from "./components/AddDoctor";
import Card from "./components/Card";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
