import React from 'react';
// import PropTypes from 'prop-types'
import Slider from "./slider";
import Title from '../title';
import {
  Container
} from './styledComponents';

class Testimonials extends React.Component {
  render() {
    return (
      <Container>
        <Title
          type={2}
          text="Title Testimonial"
        />

        <Slider />

      </Container>
    );
  }
}

Testimonials.propTypes = {

}

Testimonials.defaultProps = {

}

export default Testimonials
