import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import {useStaticQuery, graphql } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

// markup

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }

    `)

  return (
    <main >

      <title>Home Page</title>
      <Layout pageTitle="Vincent's Amazing Home Page"/>

      <StaticImage alt="Vincent's Picture" src="https://quiin.s3.us-east-1.amazonaws.com/users/pictures/004/966/881/medium/profile_-_Copy.jpg?1614791757"></StaticImage>
  
      <p>My great site home page</p>

      <div>
        Description...
        <h3>{data.site.siteMetadata.title}</h3>
      </div>

    </main>
  )
}

export default IndexPage
