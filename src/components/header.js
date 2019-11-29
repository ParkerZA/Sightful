import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      className="navbar"
      style={{
        margin: `0 auto`,

        padding: `0.45rem 1.0875rem`,
      }}
    >
      <div id="logo" alt="logo"></div>
      <ul className="links">
        <li>
          <Link>Payroll Services</Link>
        </li>
        <li>
          <Link>New Employee Registration Form</Link>
        </li>
        <li>
          <Link>Client Login</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
