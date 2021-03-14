import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Container, Row} from 'react-bootstrap';
require('dotenv').config();
const API_KEY = process.env.API_KEY;
const mapStyles = {
  width: '100%',
  height: '400px'
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={
            {
            lat: 29.64371,
            lng: -82.35463
            }
            }
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);