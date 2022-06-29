import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Container from '../components/container'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const Contact = (props) => {
  const [pages, setPages] = React.useState([])

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [pages, props])

  const counterPage = pages.find(
    (page) => page.contentful_id === '68SLKJVNYY8AFWAeUqxTIl'
  )

  return (
    <Layout location={props.location}>
      <Container>
        <Box id="counters">
          <h3>{counterPage?.title}</h3>
          <h4>{counterPage?.subtext}</h4>
          <div
            className="counters-body"
            dangerouslySetInnerHTML={{
              __html: counterPage?.longText.childMarkdownRemark.html,
            }}
          />
        </Box>
        <Box>FORM</Box>
        <Box>IMAGE</Box>
        <Box>{counterPage?.heroImage?.gatsbyImageData}</Box>
      </Container>

      {/* <ArticlePreview posts={posts} /> */}
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPage(filter: { contentful_id: {} }) {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
