import React from 'react'
import Nav from '../../components/navbar-2'
import Footer from '../../components/footer'

const Centered = ({ children }) => (
  <div
    data-layout="centered"
    className="w-full h-screen  items-center justify-center bg-grey-50">
    <Nav />
    {children}
    <Footer />
  </div>
)

export default Centered
