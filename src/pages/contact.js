import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'

const Contact = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Contact" />
      <Hero title="Contact" />
      <p>Address Atlantis Granite & Marble LLC </p>
      <p>3280 Peachtree Corners Cir B Peachtree Corners, GA 30092 </p>
      <p>Come visit us online @ https://www.atlantisgm.com/</p>
      <p>Accepted Payment Methods: Debit Card</p>
      <p>
        Business Hours: Monday 9:00 AM – 5:00 PM Tuesday 9:00 AM – 5:00 PM
        Wednesday 9:00 AM – 5:00 PM Thursday 9:00 AM – 5:00 PM Friday 9:00 AM –
        4:00 PM
      </p>
      <p>feature image</p>
    </Layout>
  )
}

export default Contact
