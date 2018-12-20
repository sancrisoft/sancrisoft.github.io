import React, { PureComponent } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
// import mojs from 'mo-js';
// import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
// import breakpoint from 'styled-components-breakpoint';

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
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;
  &:first-child {
    div.technology-item {
      span.tooltip {
        z-index: 3;
        right: -50%;
      }
    }
  }
  &:last-child {
    div.technology-item {
      span.tooltip {
        right: -50%;
      }
    }
  }
  div.technology-item {
    width: 4em;
    height: 4em;
    margin: 0 1em;
    position: relative;
    span.tooltip {
      position: absolute;
      background-color: rgba(0,0,0,0.85);
      color: white;
      border-radius: 15px;
      top: 0;
      right: -50%;
      padding: 5px 1em;
      opacity: 0;
      visibility: none;
      transition: all 0.5s ease-in-out;
      white-space: nowrap;
      /*&::after {
        content: "";
        position: absolute;
        bottom: -56%;
        right: 30%;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid rgba(0,0,0,0.85);
      }*/
    }
    &:hover span.tooltip {
      top: -3em;
      opacity: 1;
      visibility: visible;
      margin: auto;
    }
    &:hover .technology img {
      animation: none;
    }
    div.technology-icon-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: all ${({ duration }) => duration}s ease-in-out;
      animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
      border-radius: 50%;
      background-color: white;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      &:hover {
        animation: none;
      }
      .technology {
        flex: 1;
        width: 4em;
        height: 4em;
        img {
          flex: 1;
          object-fit: contain !important;
        }
      }
    }
  }
`;

export class FloatingChip extends PureComponent {
  static propTypes = {
    sizes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }

  /*
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
  */

  render() {
    const { sizes, duration, tooltip } = this.props;
    return (
      <ChipContainer duration={duration}>
        <div ref={(ref) => this.reactTech = ref} className="technology-item" onMouseEnter={this.handleEmotion}>
          <div className="technology-icon-container">
            <Img className="technology" sizes={sizes} />
          </div>
          <span className="tooltip">{tooltip}</span>
        </div>
      </ChipContainer>
    )
  }
}

export default FloatingChip
