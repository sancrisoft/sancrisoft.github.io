import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map from './map';

import {
  ButtonSelector,
  SectionContainer,
  Column,
} from './styledComponents';
import { PageSizer, H4 } from '../styledComponents';

export class MapSelector extends Component {
  static propTypes = {
    offices: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  renderSelectors = () => {
    const { offices } = this.props;
    return offices.map((office) => {
      return (
        <ButtonSelector key={office.id}>
          <H4>{office.title}</H4>
          <Column>
            <span>{office.address1}</span>
            <span>{office.address2}</span>
            <span>{office.state}</span>
            <span>{office.postalCode}</span>
          </Column>
        </ButtonSelector>
      );
    });
  };

  render() {
    return (
      <SectionContainer>
        <PageSizer className={'buttons-container'}>
          { this.renderSelectors() }
        </PageSizer>
        <div className="map-container">
          <Map />
        </div>
      </SectionContainer>
    )
  }
}

export default MapSelector
