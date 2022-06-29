import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

// import FacebookIcon from '@mui/icons-material/Facebook'
import {
  org,
  street,
  city,
  telephone,
  telephoneDisplay,
  copyright,
} from '../lib/info'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className="v-card">
        <div className="org">{org}</div>
        <div className="street">{street}</div>
        <div className="city">{city}</div>
        <a className="tel" href={telephone}>
          {telephoneDisplay}
        </a>
      </div>
      <div className="socialbuttonspanel">
        <a
          className="socialbuttonslink"
          href="https://www.facebook.com/atlantisgranite/"
          target="_blank"
        >
          <span className="icon-facebook-round"></span>
        </a>
      </div>
      <br />
      <div className={styles.copyright}>
        <span>{copyright}</span>
      </div>
    </div>
    {/* <FacebookIcon /> */}
  </Container>
)

export default Footer
