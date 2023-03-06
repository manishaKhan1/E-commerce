import '../src/Components/style.css'
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './Components/CardDetails';

import Home from './Components/Home';
import Contact from './Components/Contact';
import Cards from './Components/Cards';
import ProductsDetails from './Components/ProductsDetails';
import CartItems from './Components/CartItems';


function App() {
  return (
    <>
    
      {/* <Home/> */}
      {/* <Contact/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Cards/>}></Route>
        <Route path='/contact' element={<Contact/> }></Route>
        <Route path='/cart/:id'  element={<CardDetails/>}></Route>
        {/* <Route  path="/products/:id" element={<ProductsDetails/>}></Route> */}
        <Route path="/cartitems" element={<CartItems/>}></Route>
      </Routes>
      {/* <CardDetails/> */}
     {/* <ProductDetails/> */}
      
    </>
  );
}

export default App;
