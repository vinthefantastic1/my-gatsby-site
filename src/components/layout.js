import React from 'react'
import { title } from './layout.module.css'

const Layout = ( {pageTitle, children}) => {

    return (
        <>
            <h1 className={title}>
                {pageTitle}
            </h1>
        </>
        )
}

export default Layout
