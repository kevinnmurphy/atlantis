import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import logo from '../../content/images/logo_navy_transparent.png'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      {/* <span className={styles.logo} /> */}
      <img src={logo} alt="Logo" className={styles.logo}></img>
      {/* <span className={styles.navigationItem}>Atlantis Granite and Marble</span> */}
    </Link>

    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/reviews/" activeClassName="active">
          Reviews
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
