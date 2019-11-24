import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About me!</h1>
            <p>This is a temporary bio for my about page</p>
            <p>You can contact me via my <Link to="/contact">Contact page</Link></p>
        </Layout>
    )
}

export default AboutPage