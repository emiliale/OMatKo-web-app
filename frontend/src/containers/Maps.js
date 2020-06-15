import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Typography, Carousel } from 'antd';

const { Title, Paragraph} = Typography;

const mapStyles = {
  position: 'relative',  
  width: '90%',
  height: '80%'
}

class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
  render() {
    return (
        <div style={{ paddingRight: '2%', paddingLeft: '1%' }}>
            <Typography>
                <Title style = {{paddingRight: '20%', paddingLeft: '20%' }}>Ważne miejsca - w żadnym z nich nie może Cię zabraknąć!</Title>
        <Map
            google={this.props.google}
            onClick={this.onMapClicked}
            zoom={15}
            style={mapStyles}
            initialCenter={{lat: 51.1102993,lng:17.0577153}}>
            <Marker onClick={this.onMarkerClick}
                name={'Centrum kongresowe PWr - Centrum Dowodzenia'} 
                title = {'D-21'}/>

            <Marker onClick={this.onMarkerClick}
                name={'Bazylia - miejsce sobotniego obiadu'} 
                title = {'C-13'}
                position = {{lat: 51.1073577,lng:17.0572967}}/>
                
            <Marker onClick={this.onMarkerClick}
                name={'Miejsce piątkowej integracji'} 
                title = {'ArBar'}
                position = {{lat:51.1105205,lng: 17.028247}}/>
            <Marker onClick={this.onMarkerClick}
                name={'Miejsce Sobotniej integracji'} 
                title = {'Czasoprzestrzeń'}
                position = {{lat: 51.1047554,lng: 17.0837561 }}/>
                
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
            <div>
              <Title>{this.state.selectedPlace.title}</Title>
              <Paragraph>{this.state.selectedPlace.name}</Paragraph>
            </div>
        </InfoWindow>
      </Map>
      </Typography>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAo3-Jc295BAq4ngNU750-dsmppybzCgMk'
})(MapContainer);