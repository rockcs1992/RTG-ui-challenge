import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import React from "react"

const Header = ({ siteTitle }) => {
  const cart = useSelector(state => state.cart)
  const itemCount = cart.length
  return (
    <header
      style={ {
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      } }
    >
      <div
        style={ {
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        } }
      >
        <h1 style={{ margin: 0, position: `relative` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            { siteTitle }
          </Link>
          <Link
            to="/cart"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontSize: `1rem`,
              float: `right`,
              position: `absolute`,
              top: `1.5rem`,
              right: `1.0875rem`,
              fontWeight: `700`
            }}
          >
            CART
            <div
              style={{ 
                position: 'absolute',
                top: '-10px',
                right: '-15px',
                backgroundColor: 'coral',
                height: '24px',
                width: '24px',
                borderRadius: '50%',
                display: `${itemCount ? 'block' : 'none'}`,
                paddingLeft: '6px'
              }}>{itemCount}</div>
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
