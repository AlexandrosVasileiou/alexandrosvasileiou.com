import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Head title={intl.formatMessage({ id: "title" })} />
      <h1>{intl.formatMessage({ id: "hello" })}</h1>
      <h2>I am Alexandros, and this is my website!</h2>
      <p>It is clearly under development!</p>
      <Link to="/about">
        {intl.formatMessage({ id: "go_about_page" })}
        {/* OR <FormattedMessage id="go_about_page" /> */}
      </Link>
    </Layout>
  )
}

export default IndexPage
