import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'


const Layout = ({ children}) => {
  return (
    <>
      <Header/>
    <h1>{children}</h1>
    <Footer/>
    </>
  )
}

export default Layout