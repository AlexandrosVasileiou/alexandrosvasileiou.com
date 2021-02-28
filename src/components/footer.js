/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         author
  //       }
  //     }
  //   }
  // `)
  const copyrightYear = new Date().getFullYear()
  return (
    <footer className={footerStyles.footer}>
      <nav className={footerStyles.workLinks}>
        <ul>
          <li>
            <span>work links</span>
          </li>
          <li>
            <a href="/about">github</a>
          </li>
          <li>
            <a href="/contact">linkedin</a>
          </li>
        </ul>
      </nav>
      <p className={footerStyles.copyright}>
        Alexandros Vasileiou - {copyrightYear}
      </p>
      <nav className={footerStyles.socialLinks}>
        <ul>
          <li>
            <a href="/blog">twitter</a>
          </li>
          <li>
            <a href="/blog">instagram</a>
          </li>
          <li>
            <span>social links</span>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
