import React, { PureComponent } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import mojs from 'mo-js';
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 15px 15px 0px rgba(0,0,0,0.1);
		transform: translatey(-7px);
	}
	100% {
		box-shadow: 0 7px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(0px);
	}
`;

export const ChipContainer = styled.div`
  .technology {
    width: 100%;
    height: 100%;
    overflow: visible !important;
    img {
      border-radius: 50%;
      object-fit: cover !important;
      transition: all ${({ duration }) => duration}s ease-in-out;
      animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
      &:hover {
        animation: none;
      }
    }
  }
`;

export class FloatingChip extends PureComponent {
  static propTypes = {
    sizes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }

  handleEmotion = () => {
    const { color } = this.props;
    if (this.moAnimation) this.moAnimation.replay();
    else {
      this.moAnimation = new mojs.Burst({
        parent:   ReactDOM.findDOMNode(this.reactTech),
        radius:   { 30: 49 },
        angle:    30,
        count:    8,
        children: {
          radius:       5,
          fill:         color,
          scale:        { 1: 0, easing: 'sin.in' },
          pathScale:    [ .9, null ],
          degreeShift:  [ 13, null ],
          duration:     [ 500, 700 ],
        }
      });
      this.moAnimation.play();
    }
  }

  render() {
    const { sizes, duration } = this.props;
    return (
      <ChipContainer duration={duration}>
        <div ref={(ref) => this.reactTech = ref} className="technology-item" onMouseEnter={this.handleEmotion}>
          <Img className="technology" sizes={sizes} />
        </div>
      </ChipContainer>
    )
  }
}

export default FloatingChip
