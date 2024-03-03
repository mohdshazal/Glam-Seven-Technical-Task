import React from 'react'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import BreadCrumbs from '../components/BreadCrumbs'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <MainHeader/>
    <NavBar is_logo={true}/>
    <BreadCrumbs/>
    <Cart/>
    <Footer/>
    </>
  )
}

export default page