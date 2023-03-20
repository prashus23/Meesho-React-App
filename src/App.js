import './App.css';
import Header from './Component/Header/Header';
import LowestPrice from './Component/LowestPrice/LowestPrice';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <LowestPrice />
    </div>
  );
}

export default App;
