import React from 'react'

import './variables.css'
import './global.css'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import { org, address, telephone, telephoneDisplay } from '../lib/info'

const Topper = () => {
  return (
    <address
      className="businessnapsingleline header-address"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <div className="v-card">
        <span className="org">{org}</span>
        <span className="separator"> | </span>
        <a className="address" href="https://goo.gl/maps/6SVt9jWawSSE1YK87">
          {address}
        </a>
        <span className="separator"> | </span>
        <a href={telephone}>{telephoneDisplay}</a>
      </div>
      <div>
        <IconButton
          // color="primary"\
          sx={{ color: 'white' }}
          href="https://www.facebook.com/atlantisgranite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          // color="primary"
          sx={{ color: 'white' }}
          href="https://www.instagram.com/atlantis_gm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </div>
    </address>
  )
}

const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <div
        style={{
          backgroundColor: '#333333',
          color: 'white',
          minHeight: '4%',
          textAlign: 'center',
        }}
      >
        <Topper />
      </div>
      <Navigation />
      <main>{children}</main>
      <div style={{ backgroundColor: '#333333', color: 'white' }}>
        <Footer />
      </div>
    </>
  )
}

export default Template
