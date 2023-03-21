import React from 'react'
import LowestPrice from './Component/LowestPrice/LowestPrice'
import Navbar from './Component/Navbar/Navbar'
import Product from './Component/ProductPage/Product'

const Main = () => {
  return (
    <div>
      <Navbar />
          <LowestPrice />
          <Product />
    </div>
  )
}

export default Main
