import "./App.css";
import Cars from "./Components/Cars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import BookForm from "./Components/BookForm";
import Thanks from "./Components/Thanks";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
  <>
  <NavBar/>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Cars/>}/>
    <Route path="/detailPage/:id" element={<DetailPage/>}/>
    <Route path="/bookForm/:id" element={<BookForm/>}/>
    <Route path="/thanks" element={<Thanks/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
