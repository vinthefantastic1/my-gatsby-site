import React from 'react'
import {Link} from 'gatsby'
import  Layout  from '../components/layout'


const About = () => {


    return (
            <>
            <Link to ='/'>
                Home
            </Link>
             <Layout pageTitle="About Vincent's awesome site!"></Layout>
            </>
    )

}

export default About


