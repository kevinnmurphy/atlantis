import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'
import Swiper from '../components/swiper'
import { SwiperSlide } from 'swiper/react'

import Box from '@mui/material/Box'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../components/swiper.css'

const Projects = (props) => {
  const [pages, setPages] = React.useState([])

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [props])

  const galleryPage = pages.find(
    (page) => page.contentful_id === '7m0mGy7D7ItzfZm3ooEAbQ'
  )

  return (
    <Layout location={props.location}>
      <Seo title="Projects" />
      <Hero
        content={galleryPage?.subtext}
        image={galleryPage?.heroImage?.gatsbyImageData}
        title={galleryPage?.title}
      />
      <Box id="gallery" sx={{ minHeight: '50vh', textAlign: 'center' }}>
        <h3>{galleryPage?.title}</h3>
        <h4>{galleryPage?.subtext}</h4>
        <div
          className="gallery-body"
          dangerouslySetInnerHTML={{
            __html: galleryPage?.longText.childMarkdownRemark.html,
          }}
        />
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
      {/* <MasonryImageList {...imageProps} /> */}
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allContentfulPage(
      filter: { contentful_id: { eq: "7m0mGy7D7ItzfZm3ooEAbQ" } }
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
        imageGallery {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1200
          )
        }
      }
    }
  }
`
