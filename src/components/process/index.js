import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  EnhancedProcessContainer,
} from './styledComponents'
import ChipDescription from '../chipDescription'
import FloatingChip from './FloatingChip'
import { translate } from 'react-i18next'


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
    const { process, data, t } = this.props;
    console.log('data', data);
    return (
      <EnhancedProcessContainer>
        <ChipDescription 
          { ...process }
          title={t(`home.processes.items.${process.id}.title`)}
          description={t(`home.processes.items.${process.id}.description`)}
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

export default translate("translations")(Process)
