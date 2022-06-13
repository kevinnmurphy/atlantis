import React from 'react'

import './variables.css'
import './global.css'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <div
        style={{
          backgroundColor: '#333333',
          color: 'white',
          minHeight: '4%',
        }}
      ></div>
      <Navigation />
      <main>{children}</main>
      <div style={{ backgroundColor: '#333333', color: 'white' }}>
        <Footer />
      </div>
    </>
  )
}

export default Template
