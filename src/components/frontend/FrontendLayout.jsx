import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import "../../assets/frontend/css/bootstrap.min.css"
import "../../assets/frontend/css/font-awesome.min.css"
import "../../assets/frontend/css/elegant-icons.css"
import "../../assets/frontend/css/nice-select.css"
import "../../assets/frontend/css/jquery-ui.min.css"
import "../../assets/frontend/css/jquery-ui.min.css"
import "../../assets/frontend/css/owl.carousel.min.css"
import "../../assets/frontend/css/slicknav.min.css"
import "../../assets/frontend/css/style.css"






const FrontendLayout = () => {
  return (
    <>
        <Header />
        {/* pages  */}
        <Outlet />
        <Footer />
    </>
  )
}

export default FrontendLayout