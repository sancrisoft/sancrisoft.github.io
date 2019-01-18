import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from "react-mapbox-gl"
import styled from 'styled-components'
import MapConfiguration from '../data/map-configuration.json';

let ReactMapboxGl = {}

if (typeof window !== `undefined`) {
  ReactMapboxGl = require('react-mapbox-gl')
} else {
  ReactMapboxGl.Map = () => {
    return class Mock extends React.Component {
      render() {
        return <div />
      }
    }
  }
}

const MarkerImage = styled.img`
  margin-bottom: 0 !important;
`;

const Map = ReactMapboxGl.Map({
  accessToken: "pk.eyJ1IjoiZGFya2luZzM2MCIsImEiOiJjanF3eHl4MzQwNzk0NDJudzJxZ2JqeTBpIn0.T83Goh06X-GD50LOTtKcog",
  dragRotate: false,
});

const FinalMap = ({ latitude, longitude, markerIcon, zoom }) => (
  <Map
    style={MapConfiguration}
    containerStyle={{
      height: "100%",
      width: "100%"
    }}
    center={[longitude, latitude]}
    zoom={[zoom]}
  >
    <Marker
      coordinates={[longitude, latitude]}
      anchor="bottom">
        <MarkerImage src={markerIcon} alt="Sancrisoft logo" />
    </Marker>
  </Map>
)

FinalMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  markerIcon: PropTypes.string,
}

export default FinalMap