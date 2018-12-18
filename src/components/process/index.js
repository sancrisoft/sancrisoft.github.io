import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  H4,
} from '../styledComponents';
import {
  ProcessContainer,
} from './styledComponents';
import mojs from 'mo-js';
import ReactDOM from 'react-dom'

export class index extends PureComponent {
  static propTypes = {
    image: PropTypes.object.isRequired,
  }

  handleEmotion = () => {
    const animation = new mojs.Burst({
      parent:   ReactDOM.findDOMNode(this.reactTech),
      radius:   { 30: 49 },
      angle:    30,
      count:    8,
      children: {
        radius:       5,
        fill:         '#65DAF9',
        scale:        { 1: 0, easing: 'sin.in' },
        pathScale:    [ .9, null ],
        degreeShift:  [ 13, null ],
        duration:     [ 500, 700 ],
      }
    });
    animation.play();
  }

  render() {
    return (
      <ProcessContainer>
        <img className="avatar" src="https://content-static.upwork.com/blog/uploads/sites/3/2017/02/24172515/Frontend-vs-backend-940x400-940x400.jpg" />
        <div className="detail">
          <H4>Cool title</H4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className="technologies">
            <div ref={(ref) => this.reactTech = ref} className="technology-item" onMouseEnter={this.handleEmotion}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" />
            </div>
          </div>
        </div>
      </ProcessContainer>
    )
  }
}

export default index
