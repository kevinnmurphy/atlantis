import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
// import ArticlePreview from '../components/article-preview'
// import ContactForm from '../components/ContactForm'
import MyForm from '../components/MyForm'

import { GatsbyImage } from 'gatsby-plugin-image'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
// import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/system'

import { telephone, telephoneDisplay } from '../lib/info'

import Swiper from '../components/swiper'
import { SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../components/swiper.css'

import useOnScreen from '../hooks/useOnScreen'

const StyledPaper = styled(Paper)((props) => ({
  backgroundColor: '#e9f0ff',
  color: '#656c81',
  padding: '1.5em 3em 1.5em 3em',
}))

const SimpleGrow = ({ children }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-50px')

  return (
    <Box ref={ref}>
      <Grow
        in={onScreen}
        style={{ transformOrigin: '0 0 0' }}
        {...(onScreen ? { timeout: 500 } : {})}
      >
        {children}
      </Grow>
    </Box>
  )
}

const RootIndex = (props) => {
  // console.log(props)
  const [pages, setPages] = React.useState([])
  // const [posts, setPosts] = React.useState([])
  // const [author, setAuthor] = React.useState([])
  console.log(pages)

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [props])
  // React.useEffect(() => {
  //   setPosts(get(props, 'data.allContentfulBlogPost.nodes'))
  // }, [props])

  // const find_by_id = (items, id) =>
  //   items.find((item) => items.contentful_id === `${id}`)

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
      <Container>
        <SimpleGrow>
          <Box id="about" sx={{ textAlign: 'center', paddingBottom: '1em' }}>
            <h3>{aboutPage?.title}</h3>
            <h4>{aboutPage?.subtext}</h4>
            <p>{aboutPage?.longText.longText}</p>
            <div
              // className="about-body"
              dangerouslySetInnerHTML={{
                __html: aboutPage?.longText.childMarkdownRemark.html,
              }}
            />
          </Box>
        </SimpleGrow>
        <SimpleGrow>
          <StyledPaper>
            <Box id="process">
              <h3>{processPage?.title}</h3>
              <h4>{processPage?.subtext}</h4>
              <div
                className="process-body"
                dangerouslySetInnerHTML={{
                  __html: processPage?.longText.childMarkdownRemark.html,
                }}
              />
            </Box>
          </StyledPaper>
        </SimpleGrow>
        <SimpleGrow>
          <Box id="counters" sx={{ textAlign: 'center' }}>
            <h3>{counterPage?.title}</h3>
            <h4>{counterPage?.subtext}</h4>
            <div
              className="counters-body"
              dangerouslySetInnerHTML={{
                __html: counterPage?.longText.childMarkdownRemark.html,
              }}
            />
          </Box>
        </SimpleGrow>
        <SimpleGrow>
          <Box id="gallery">
            <StyledPaper>
              <h3>{galleryPage?.title}</h3>
              <h4>{galleryPage?.subtext}</h4>
              <div
                className="gallery-body"
                dangerouslySetInnerHTML={{
                  __html: galleryPage?.longText.childMarkdownRemark.html,
                }}
              />
            </StyledPaper>
            <Box sx={{ paddingTop: '0.5em' }}>
              <Swiper>
                {galleryPage?.imageGallery.map(({ gatsbyImageData }, i) => (
                  <SwiperSlide key={`${gatsbyImageData}-${i}`}>
                    <GatsbyImage
                      className="swiper-slide-image"
                      alt={'title'}
                      image={gatsbyImageData}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </SimpleGrow>
        <SimpleGrow>
          <Box
            sx={{
              padding: '2em 0 3em 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h4 id="contact">Contact Us</h4>
            {/* <ContactForm /> */}
            <MyForm />
          </Box>
        </SimpleGrow>
        <SimpleGrow>
          <Box id="faq">
            <Accordion
              sx={{
                // backgroundColor: '#e9f0ff',
                boxShadow: 'none',
                color: '#656c81',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>{faqPage?.title}</h3>
                <h4>{faqPage?.subtext}</h4>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0 2em 1em 2em' }}>
                <StyledPaper>
                  <div
                    className="faqPage-body"
                    dangerouslySetInnerHTML={{
                      __html: faqPage?.longText.childMarkdownRemark.html,
                    }}
                  />
                </StyledPaper>
              </AccordionDetails>
            </Accordion>
          </Box>
        </SimpleGrow>
        <Divider sx={{ padding: '1em' }} />
        <Box id="business" sx={{ textAlign: 'center', paddingTop: '2em' }}>
          <Box sx={{ typography: 'h4', padding: '0.5em' }}>
            The Granite, Marble, and Quartz Specialists
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              padding: '1em',
              display: 'flex',
            }}
          >
            <Box
              className="map"
              sx={{
                boxShadow: 3,
                maxHeight: '100%',
                maxWidth: '100%',
                // padding: '8px',
                display: 'flex',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.9127764584164!2d-84.2532796844194!3d33.94337143090631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a0b851aa6841%3A0x69061a48f35c748d!2sAtlantis%20Granite%20%26%20Marble%20LLC!5e0!3m2!1sen!2sus!4v1656432789418!5m2!1sen!2sus"
                width="600"
                height="450"
                title="google-map"
                style={{ border: '0' }}
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
          <br />
          <Box sx={{ typography: 'h5' }}>
            Working On A Home Project For 2022?
          </Box>
          <Box>
            <a href={telephone}>{telephoneDisplay}</a>
          </Box>
          <Box sx={{ fontWeight: '500' }}>
            <a href="#contact">Request A Quote</a>
          </Box>
        </Box>
      </Container>

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
        imageGallery {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1200
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
