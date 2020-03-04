import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: this.props.data.latitude,
            lng: this.props.data.longitude
        }
    }

    displayMarkers = () => {
        return <Marker position={{
                lat: this.state.lat,
                lng: this.state.lng
            }}
                           onClick={() => console.log("You clicked me!")} />
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: this.state.lat, lng: this.state.lng}}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3pqZrBIChSlLnnkX0i_EXGS2ovOg4Jgs'
})(MapContainer);


const mapStyles = {
    top: 0,
    width: '95%',
    height: '100%',
};

