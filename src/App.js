import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarInfo from "./pages/CarInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { cars } from "../src/data"
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(car) {
    setCart([...cart, {...car, quantity: 1}])
  }

  function removeFromCart(id){
    setCart(prevSetCart => prevSetCart.filter(car => +car.id !== +id))
  }
  
  function changeQuantity(car, quantity){
    setCart(cart.map(item => {
      return item.id === car.id
        ? {
            ...item,
            quantity: +quantity,
          }
        : item;
    }))
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item =>{
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfCartItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cars" element={<Cars cars={cars}/>}/>
          <Route path="/cars/:id" element={<CarInfo cars={cars} cart={cart} addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} remove={removeFromCart}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
