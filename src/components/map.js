import React from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl from "react-mapbox-gl"
import { Marker } from "react-mapbox-gl"
import styled from 'styled-components'

const MarkerImage = styled.img`
  margin-bottom: 0 !important;
`;

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGFya2luZzM2MCIsImEiOiJjanF3eHl4MzQwNzk0NDJudzJxZ2JqeTBpIn0.T83Goh06X-GD50LOTtKcog",
  dragRotate: false,
});

// TODO Agregar llave de Google maps cuando se tenga!!!!! OJO

const FinalMap = ({ latitude, longitude, markerIcon, zoom }) => (
  <Map
    style="mapbox://styles/mapbox/streets-v9"
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

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  markerIcon: PropTypes.string,
}

export default FinalMap