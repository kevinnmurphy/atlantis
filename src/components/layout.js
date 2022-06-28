import React from 'react'

import './variables.css'
import './global.css'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Topper = () => (
  <address
    class="businessnapsingleline header-address"
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}
  >
    <div class="v-card">
      <span class="org">Atlantis Granite &amp; Marble LLC</span>
      <span class="adr">
        <span class="separator"> | </span>
        <span class="icon-map-marker"></span>
        <span class="street-address">3280 Peachtree Corners Cir B</span>
        <span class="locality">Peachtree Corners</span>
        <span class="region">GA</span>
        <span class="postal-code">30092</span>
      </span>

      <span>
        <span class="separator"> | </span>
        <span class="icon-phone"></span>
        <a
          id="ctl22_hlPhoneLink"
          class="phonelink tel"
          onclick="ga('send', 'event', 'Local Phone Button', 'click');"
          href="tel:+16782713409"
        >
          (678) 271-3409
        </a>
      </span>
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
