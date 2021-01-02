import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const UsesPage = () => {
  return (
    <Layout>
      <Head title="Uses" />
      <h1>Uses!</h1>
      <p>This is a temporary page for my uses page</p>
      <p>
        You can contact me via my <Link to="/contact">Contact page</Link>
      </p>
    </Layout>
  )
}

export default UsesPage
