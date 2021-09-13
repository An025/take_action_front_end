import React from 'react';
import '@immfly/flights-map';

class FlightsMapContainer extends React.Component {

  render () {
    return <flights-map ref={(el) => {
      if(el) {
        (el.flights = this.props.myFlights)
       }
    }} />
  }
}

export default FlightsMapContainer
