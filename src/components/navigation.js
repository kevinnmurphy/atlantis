import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import logo from '../../content/images/logo_navy_transparent.png'

import Box from '@mui/material/Box'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      {/* <span className={styles.logo} /> */}
      <img src={logo} alt="Logo" className={styles.logo}></img>
      {/* <span className={styles.navigationItem}>Atlantis Granite and Marble</span> */}
    </Link>

    <Box sx={{ typography: 'h5' }}>Atlanta’s Trusted Countertop Experts</Box>

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
        <Link to="/projects/" activeClassName="active">
          Project Gallery
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
