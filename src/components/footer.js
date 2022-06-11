import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className="v-card">
        <div className="fn org">Atlantis Granite &amp; Marble LLC</div>
        <div className="adr">
          <span className="street-address">3280 Peachtree Corners Cir B</span>
          <br />
          <span className="locality">Peachtree Corners</span>,&nbsp;
          <span className="region">GA</span>&nbsp;
          <span className="postal-code">30092</span>
        </div>
        <a
          className="phonelink tel"
          // onclick="ga('send', 'event', 'Phone Call Click', 'click', 'Footer (678) 292-6600');"
          href="tel:+16782713409"
        >
          <span className="icon-phone"></span>(678) 271-3409
        </a>
      </div>
      <div className="socialbuttonspanel">
        <a
          className="socialbuttonslink"
          // onclick="ga('send', 'event', 'Social Media Click', 'click', 'https://www.facebook.com/atlantisgranite/');"
          href="https://www.facebook.com/atlantisgranite/"
          target="_blank"
        >
          <span className="icon-facebook-round"></span>
        </a>
      </div>
      <div className="footercredit">
        <span>
          Copyright © 2022 Atlantis Granite &amp; Marble LLC, All rights
          reserved.
        </span>
      </div>
      <p>Privacy Policy</p>
      <p>Terms Of Service</p>
    </div>
  </Container>
)

export default Footer
