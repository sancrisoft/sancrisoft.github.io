import { Link } from 'gatsby'
import React from 'react'
import { MenuContainer } from './styledComponents'

const Menu = () => {
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

export default Menu
