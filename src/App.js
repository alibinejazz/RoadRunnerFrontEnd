import "./App.css";
import Cars from "./Components/Cars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import BookForm from "./Components/BookForm";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Cars/>}/>
    <Route path="/detailPage/:id" element={<DetailPage/>}/>
    <Route path="/bookForm/:id" element={<BookForm/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
