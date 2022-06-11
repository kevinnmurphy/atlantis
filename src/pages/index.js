import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
// import ArticlePreview from '../components/article-preview'

const telephone = 'tel:+16782713409'

const Text = () => (
  <>
    Clicks
    <br />
    <a href="#contact">Contact Form</a>
    <br />
    <a href="#business">business days/hours</a>
    <br />
    <a href="#gallery">Project Gallery</a>
    <br />
    <a href={telephone}>give us a call</a>
    <br />
    <br />
  </>
)

const RootIndex = (props) => {
  console.log(props)
  const [pages, setPages] = React.useState([])
  const [posts, setPosts] = React.useState([])
  // const [author, setAuthor] = React.useState([])

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [pages, props])
  React.useEffect(() => {
    setPosts(get(props, 'data.allContentfulBlogPost.nodes'))
  }, [posts, props])

  console.log({ pages })

  const find_by_id = (items, id) =>
    items.find((item) => items.contentful_id === `${id}`)

  const homePage = pages.find(
    (page) => page.contentful_id === '3sYk6CmxQ4yh5XvYftb5of'
  )
  const aboutPage = pages.find(
    (page) => page.contentful_id === '1JuVY0WNZg6StCYufwelAH'
  )
  const processPage = pages.find(
    (page) => page.contentful_id === '1W0gXBzJShvkfh5CUftvlc'
  )
  const counterPage = pages.find(
    (page) => page.contentful_id === '68SLKJVNYY8AFWAeUqxTIl'
  )
  const galleryPage = pages.find(
    (page) => page.contentful_id === '7m0mGy7D7ItzfZm3ooEAbQ'
  )
  const faqPage = pages.find(
    (page) => page.contentful_id === '5cK7SGA0wWaLCX0EpM1prj'
  )

  return (
    <Layout location={props.location}>
      <Hero
        content={homePage?.subtext}
        image={homePage?.heroImage?.gatsbyImageData}
        title={homePage?.title}
      />

      <Text />

      <div id="about">
        <h3>{aboutPage?.title}</h3>
        <h4>{aboutPage?.subtext}</h4>
        <p>{aboutPage?.longText.longText}</p>
        <div
          // className="about-body"
          dangerouslySetInnerHTML={{
            __html: aboutPage?.longText.childMarkdownRemark.html,
          }}
        />
      </div>
      <div id="process">
        <h3>{processPage?.title}</h3>
        <h4>{processPage?.subtext}</h4>
        <div
          className="process-body"
          dangerouslySetInnerHTML={{
            __html: processPage?.longText.childMarkdownRemark.html,
          }}
        />
      </div>
      <div id="counters">
        <h3>{counterPage?.title}</h3>
        <h4>{counterPage?.subtext}</h4>
        <div
          className="counters-body"
          dangerouslySetInnerHTML={{
            __html: counterPage?.longText.childMarkdownRemark.html,
          }}
        />
      </div>
      <div id="gallery">
        <h3>{galleryPage?.title}</h3>
        <h4>{galleryPage?.subtext}</h4>
        <div
          className="gallery-body"
          dangerouslySetInnerHTML={{
            __html: galleryPage?.longText.childMarkdownRemark.html,
          }}
        />
      </div>
      <h4 id="contact">Contact Us</h4>
      <h5>Fill out this form</h5>
      <div id="faq">
        <h3>{faqPage?.title}</h3>
        <h4>{faqPage?.subtext}</h4>
        <div
          className="faqPage-body"
          dangerouslySetInnerHTML={{
            __html: faqPage?.longText.childMarkdownRemark.html,
          }}
        />
      </div>

      <div id="business">
        The Granite, Marble, and Quartz Specialists
        <br />
        <span>Working On A Home Project For 2022?</span>
        <br />
        <a href={telephone}>(678) 271-3409</a>
        <br />
        <a href="#contact">Request A Quote</a>
      </div>

      {/* <ArticlePreview posts={posts} /> */}
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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

// allContentfulPerson(
//   filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
// ) {
//   nodes {
//     name
//     shortBio {
//       shortBio
//     }
//     title
//     heroImage: image {
//       gatsbyImageData(
//         layout: CONSTRAINED
//         placeholder: BLURRED
//         width: 1180
//       )
//     }
//   }
// }
