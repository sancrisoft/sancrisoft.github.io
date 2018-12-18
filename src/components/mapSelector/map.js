import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// TODO Agregar llave de Google maps cuando se tenga!!!!! OJO

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ latitude: lat, longitude: lng, zoom, markerIcon }) =>
  <GoogleMap
    defaultZoom={zoom}
    defaultCenter={{ lat, lng }}
    center={{ lat, lng }}
  >
    <Marker position={{ lat, lng }} icon={markerIcon}  />
  </GoogleMap>
)

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  markerIcon: PropTypes.string,
}

export default Map