import React from "react"
import Footer from "./footer"
import "../styles/layout.css"

//components
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
