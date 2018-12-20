import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  EnhancedProcessContainer,
} from './styledComponents';
import ChipDescription from '../chipDescription';
import FloatingChip from './FloatingChip';


export class Process extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    process: PropTypes.object.isRequired,
  }

  renderFloatingChips = () => {
    const { process, data } = this.props;
    return process.technologies.map((tech) => (
      <FloatingChip 
        key={tech.id} 
        sizes={data[tech.id].childImageSharp.sizes} 
        color={tech.color}
        duration={Math.floor(Math.random() * 4) + 2 }
        tooltip={tech.tooltip}
      />
    ));
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
          { this.renderFloatingChips() }
        </div>
        </ChipDescription>
      </EnhancedProcessContainer>
    )
  }
}

export default Process
