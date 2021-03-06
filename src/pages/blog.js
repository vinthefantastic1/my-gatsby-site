import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPage = ( { data }) => {

    console.log(data)

    return (
        <>
            <main className="container container-fluid" >
                <div className="row">
                    <div className="col col-md-12">
                                  
            <Layout pageTitle="VL Blog Posts"/>

            <ul>

            { data.allMdx.nodes.map(node => {
                console.log(node)
                return (

                        <li key={node.frontmatter.title}>
                        <article>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </article>
                        <hr />
                        </li>

                
                ) 
                }
            )}

            </ul>
            </div>
            </div>
            </main>
        </>
    )

}

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          date
          example_boolean
          title
        }
        body
      }
    }
  }
`

export default BlogPage