import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'

const Projects = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Projects" />
      <Hero title="Projects" />
      <p>GALLERY</p>
    </Layout>
  )
}

export default Projects
