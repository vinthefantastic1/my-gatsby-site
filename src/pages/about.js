import React from 'react'
import {Link} from 'gatsby'
import  Layout  from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {


    return (
            <>
            <main className="container container-fluid" >
                <div className="row">
                    <div className="col col-md-12">
                        <Layout pageTitle="About Vincent" />
                        <div>I like photography, programming, travel, beaches.</div>


                    </div>

                </div>
                <div className="row">
                    <div className="col col-md-6">
                        <StaticImage src="../images/beach.jpg" alt="beach scene"></StaticImage>                        

                    </div>
                </div>
            </main>

            </>
    )

}

export default About


