import React from 'react'
import Nav from '../components/Nav'
import ProductList from '../components/ProductList'
import Signup from '../components/Signup'

const Home = () => {
  return (
    <>
    <Nav />
    <h1>Home</h1>
    <ProductList />
    {/* <Signup /> */}
    </>
  )
}

export default Home