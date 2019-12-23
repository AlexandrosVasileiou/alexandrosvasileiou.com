import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
      <p>
          If you think this page should exist, please contact me!
      </p>
    </Layout>
  )
}

export default NotFound
