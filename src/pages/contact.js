import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact me!</h1>
            <p>The best way to contact me is through <a href="https://twitter.com/@alexvasileioy" target="_blank" rel="noopener noreferrer">Twitter!</a></p>
        </Layout>
    )
}

export default ContactPage