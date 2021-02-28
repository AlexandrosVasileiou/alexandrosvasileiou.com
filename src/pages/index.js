/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className="centeredText">
        <p>
          Welcome
          <br />
          <br />
          My name is Alexandros Vasileiou
          <br />
          and this is my personal website
          <br />
          <br />
          In this website you will find
          <br />
          <br />
          more
          <Link to="/about"> about me</Link>
          <br />
          the
          <Link to="/contact"> projects </Link>
          I’ve worked on
          <br />
          and
          <Link to="/blog"> blog posts </Link>
          on various topics such as
          <br />
          <Link className="tagLink" to="/tags/linux">
            linux
          </Link>
          ,
          <Link className="tagLink" to="/tags/web-developmnet">
            {" "}
            web development
          </Link>
          ,
          <Link className="tagLink" to="/tags/startups">
            {" "}
            startups{" "}
          </Link>
          and
          <Link className="tagLink" to="/tags/triathlon">
            {" "}
            triathlon
          </Link>
          <br />
          <br />
          Enjoy
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
