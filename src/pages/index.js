import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <main >

        <Link to ='/'> Home </Link>&nbsp;
        <Link to ='/about'> About </Link>
        

      <title>Home Page</title>
      <Layout pageTitle="Vincent's Amazing Home Page"></Layout>

      <StaticImage alt="Vincent's Picture" src="https://quiin.s3.us-east-1.amazonaws.com/users/pictures/004/966/881/medium/profile_-_Copy.jpg?1614791757"></StaticImage>
  
      <p>My great site home page</p>

    </main>
  )
}

export default IndexPage
