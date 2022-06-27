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
          textAlign: 'center',
        }}
      >
        <address class="businessnapsingleline header-address">
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
        </address>
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
