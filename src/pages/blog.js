import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPage = ( { data }) => {

return (
    <div>
<Layout pageTitle="VL Blog Posts"/>

<ul>
{data.allFile.nodes.map(node=> {
    return (
        <li key={node.name}>
            {node.name}
        </li>
    )
})}
</ul>
</div>
)

}

export const query =  graphql`
query BlogPosts {
  allFile(filter: { dir: { regex: "/blog/" } }) {
    nodes {
      name
    }
  }
}
`

export default BlogPage