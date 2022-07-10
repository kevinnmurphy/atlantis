import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import Box from '@mui/material/Box'

const BlogIndex = (props) => {
  const [pages, setPages] = React.useState([])
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [props])
  React.useEffect(() => {
    setPosts(get(props, 'data.allContentfulBlogPost.nodes'))
  }, [props])

  const blogPage = pages.find(
    (page) => page.contentful_id === '1VhwHJebpOBWCik9zHM3dm'
  )

  return (
    <Layout location={props.location}>
      <Seo title="Blog" />
      <Hero
        content={blogPage?.subtext}
        image={blogPage?.heroImage?.gatsbyImageData}
        title={blogPage?.title}
      />
      <Box id="blogPosts" sx={{ minHeight: '50vh' }}>
        <h3>{blogPage?.title}</h3>
        <h4>{blogPage?.subtext}</h4>
        {/* <div
          className="blogs-body"
          dangerouslySetInnerHTML={{
            __html: blogPage?.longText.childMarkdownRemark.html,
          }}
        /> */}

        <ArticlePreview posts={posts} />
      </Box>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPage(
      filter: { contentful_id: { eq: "1VhwHJebpOBWCik9zHM3dm" } }
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
