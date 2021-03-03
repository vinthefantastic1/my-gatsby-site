import React from 'react'
import { title } from './layout.module.css'
import { Link } from 'gatsby'

const Layout = ( {pageTitle, children}) => {

    return (
        <>
       <Link to ='/'> Home </Link>&nbsp;
        <Link to ='/about'> About </Link> &nbsp;
        <Link to ='/blog'> Blog</Link>

            <h1 className={title}>
                {pageTitle}
            </h1>
        </>
        )
}

export default Layout
