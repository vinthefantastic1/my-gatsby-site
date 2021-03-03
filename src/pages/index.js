import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
    <main >

        <Link to ='/'> Home </Link>&nbsp;
        <Link to ='/about'> About </Link>
        

      <title>Home Page</title>
      <Layout pageTitle="Vincent's Amazing Home Page"></Layout>
  
      <p>My great site home page</p>

    </main>
  )
}

export default IndexPage
