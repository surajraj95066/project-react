import React from 'react'
import Navbar from './Navbar'
import Area1 from './Area1'
import Contain1 from './Contain1'
import Footer from './Footer'

export default function FoldHope() {
  return (
    <>
      <Navbar/>
      <div className="con-1">
        {/* <Image/> */}
        <Area1></Area1>
        <Contain1></Contain1>
        <Footer></Footer>
      </div>   
    </>
  )
}
