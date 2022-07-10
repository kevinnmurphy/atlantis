import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Seo from '../components/seo'

import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import { GatsbyImage } from 'gatsby-plugin-image'

import Swiper from '../components/swiper'
import { SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../components/swiper.css'

const MasonryImageList = ({ itemData = [], galleryPage }) => {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        {/* {galleryPage?.imageGallery.map(({ gatsbyImageData }, i) => (
          <ImageListItem key={`${gatsbyImageData}-${i}`}>
            <GatsbyImage image={gatsbyImageData} />
          </ImageListItem>
        ))} */}
      </ImageList>
    </Box>
  )
}

const Projects = (props) => {
  const [pages, setPages] = React.useState([])
  // const galleryPage = pages.find(
  //   (page) => page.contentful_id === '7m0mGy7D7ItzfZm3ooEAbQ'
  // )
  console.log(pages)

  React.useEffect(() => {
    setPages(get(props, 'data.allContentfulPage.nodes'))
  }, [props])

  const galleryPage = pages.find(
    (page) => page.contentful_id === '7m0mGy7D7ItzfZm3ooEAbQ'
  )

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ]

  const imageProps = {
    // itemData: pages.imageGallery,
    itemData,
    gatsbyImageData: pages,
  }
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
