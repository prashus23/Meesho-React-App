import "./App.css";
import Header from "./Component/Header/Header";
// import LowestPrice from "./Component/LowestPrice/LowestPrice";
// import Navbar from "./Component/Navbar/Navbar";
// import Product from "./Component/ProductPage/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Main/>}></Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
