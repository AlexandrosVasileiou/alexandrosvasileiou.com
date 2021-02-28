/* eslint-disable react/jsx-curly-newline */
import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
// import { Link, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [active, setActive] = useState("home")
  const changeTab = name => {
    setActive(name)
  }

  return (
    <header className={headerStyles.header}>
      {/* <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1> */}
      {/* Vim Navbar */}
      <nav className={headerStyles.vimNavbar}>
        <ul>
          <li>
            <Link to="/">alexandrosvasileiou.com</Link>
          </li>
          <li
            className={`${
              active === "about" ? headerStyles.vimActiveItem : ""
            }`}
          >
            <Link
              getProps={({ isPartiallyCurrent }) => {
                return isPartiallyCurrent ? changeTab("about") : null
              }}
              to="/about"
            >
              about
            </Link>
          </li>
          <li
            className={`${
              active === "contact" ? headerStyles.vimActiveItem : ""
            }`}
          >
            <Link
              to="/contact"
              getProps={({ isPartiallyCurrent }) => {
                return isPartiallyCurrent ? changeTab("contact") : null
              }}
            >
              projects
            </Link>
          </li>
          <li
            className={`${active === "uses" ? headerStyles.vimActiveItem : ""}`}
          >
            <Link
              to="/uses"
              getProps={({ isPartiallyCurrent }) => {
                return isPartiallyCurrent ? changeTab("uses") : null
              }}
            >
              uses
            </Link>
          </li>
          <li
            className={`${active === "blog" ? headerStyles.vimActiveItem : ""}`}
          >
            <Link
              getProps={({ isPartiallyCurrent }) => {
                return isPartiallyCurrent ? changeTab("blog") : null
              }}
              to="/blog"
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={headerStyles.colorMode}>
        <ul className={headerStyles.colorMode}>
          <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme(theme === "light" ? "dark" : "light")
                  }}
                >
                  {theme === "light" ? "dark theme" : "light theme"}
                  {/* {theme === "light" ? "🌙" : "☀"} */}
                </button>
              )}
            </ThemeToggler>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
