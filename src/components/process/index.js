import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  H4,
} from '../styledComponents';
import {
  EnhancedProcessContainer,
} from './styledComponents';
import ChipDescription from '../chipDescription';
import mojs from 'mo-js';
import ReactDOM from 'react-dom'

export class Process extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    process: PropTypes.object.isRequired,
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
    const { process, data } = this.props;
    return (
      <EnhancedProcessContainer>
        <ChipDescription 
          { ...process }
          image={data[process.id].childImageSharp.sizes}
        >
        <div className="technologies">
          <div ref={(ref) => this.reactTech = ref} className="technology-item" onMouseEnter={this.handleEmotion}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" />
          </div>
        </div>
        </ChipDescription>
      </EnhancedProcessContainer>
    )
  }
}

export default Process
