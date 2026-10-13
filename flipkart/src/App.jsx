import "./App.css";
import AddDoctor from "./components/AddDoctor";
import Card from "./components/Card";
import DoctorDetails from "./components/DoctorDetails";
import EditDoctor from "./components/EditDoctor";
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
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/editDoctor/:id" element={<EditDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
