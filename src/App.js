import './App.css';
import Header from './Component/Header/Header';
import LowestPrice from './Component/LowestPrice/LowestPrice';
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/ProductPage/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <LowestPrice />
      <Product/>
    </div>
  );
}

export default App;
