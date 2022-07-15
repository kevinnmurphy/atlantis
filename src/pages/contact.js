import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Container from '../components/container'
import Hero from '../components/hero'
import Layout from '../components/layout'
// import ContactForm from '../components/ContactForm'
import MyForm from '../components/MyForm'

import Box from '@mui/material/Box'
// import Divider from '@mui/material/Divider'

const Contact = (props) => {
  const [pages, setPages] = React.useState([])

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [props])

  const counterPage = pages.find(
    (page) => page.contentful_id === '68SLKJVNYY8AFWAeUqxTIl'
  )

  return (
    <Layout location={props.location}>
      <Hero
        content={counterPage?.subtext}
        image={counterPage?.heroImage?.gatsbyImageData}
        title={counterPage?.title}
      />
      <Container>
        <Box id="counters" sx={{ minHeight: '50vh' }}>
          <h3>{counterPage?.title}</h3>
          <h4>{counterPage?.subtext}</h4>
          <div
            className="counters-body"
            dangerouslySetInnerHTML={{
              __html: counterPage?.longText.childMarkdownRemark.html,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <ContactForm /> */}
            <MyForm />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPage(
      filter: { contentful_id: { eq: "68SLKJVNYY8AFWAeUqxTIl" } }
    ) {
      nodes {
        contentful_id
        title
        subtext
        longText {
          childMarkdownRemark {
            html
          }
        }
        heroImage: mainImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
