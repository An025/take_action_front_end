import React from 'react';
import '@immfly/flights-map'

class FlightsMapContainer extends React.Component {
  render () {
    return <flights-map ref={(el) => {el.flights = this.props.flights}} />
  }
}

export default FlightsMapContainer
