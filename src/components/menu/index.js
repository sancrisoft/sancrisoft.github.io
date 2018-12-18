import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { MenuContainer } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
export class Menu extends PureComponent { 
    render() {
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
        );
    }
}
Menu.propTypes = {
    viewport: PropTypes.object,
}

Menu.defaultProps = {
}

export default Viewport(Menu);
