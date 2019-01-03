import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Map from '../map';
import logo from "../../images/small-logo.png";
import {
  ButtonSelector,
  SectionContainer,
  Column,
} from './styledComponents';
import { PageSizer, H4, H3 } from '../styledComponents';

export class MapSelector extends Component {
  static propTypes = {
    offices: PropTypes.arrayOf(PropTypes.object).isRequired,
    markerIcon: PropTypes.object,
    title: PropTypes.string.isRequired,
  }

  state = {
    selectedOffice: 'none'
  };

  componentDidMount = () => {
    const { offices } = this.props;
    this.setState({ selectedOffice: offices[0].id });
  }

  renderSelectors = () => {
    const { offices } = this.props;
    const { selectedOffice } = this.state;
    return offices.map((office) => {
      return (
        <ButtonSelector
          key={office.id}
          className={selectedOffice === office.id ? 'active' : null}
          onClick={() => this.setState({ selectedOffice: office.id })}
        >
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
    const { selectedOffice } = this.state;
    const { title } = this.props;
    const office = this.props.offices.find((office) => office.id === selectedOffice);
    return (
      <SectionContainer>
        <H3 className="section-heading">{title}</H3>
        <PageSizer className={'buttons-container'}>
          { this.renderSelectors() }
        </PageSizer>
        <div className="map-container">
          <Map
            latitude={office ? parseFloat(office.latitude) : 0}
            longitude={office ? parseFloat(office.longitude) : 0}
            zoom={15}
            markerIcon={logo}
          />
        </div>
      </SectionContainer>
    )
  }
}

export default MapSelector
