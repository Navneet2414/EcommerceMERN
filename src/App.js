// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Post from './component/Posts/Post';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path="/" element={<Shop/>}/>
       <Route path="/mens" element={<ShopCategory/>}/>
       <Route path="/womens" element={<ShopCategory/>}/>
       <Route path="/kids" element={<ShopCategory/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/post" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
