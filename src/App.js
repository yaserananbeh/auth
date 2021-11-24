import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductContainer from './components/ProductContainer';


export class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductContainer/>}/>
      </Routes>
    
      </BrowserRouter>
      </>
    )
  }
}

export default App
