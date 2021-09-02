import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <header>
      <div>{title}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts/categories">Posts Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
