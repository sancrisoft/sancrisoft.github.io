import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { MenuContainer } from './styledComponents'

const Menu = (props) => {
  console.log('props', props);  
  return (
    <MenuContainer>
        <Link to="/" >
            About Us
        </Link>
        <Link to="/" >
            Case Studies
        </Link>
        <Link to="/" >
            Careers
        </Link>
        <Link to="/" >
            Get a Quote
        </Link>
        <Link to="/" >
            EN | ES
        </Link>
    </MenuContainer>
)}

Menu.propTypes = {
}

Menu.defaultProps = {
    options: PropTypes.array,
}

export default Menu
