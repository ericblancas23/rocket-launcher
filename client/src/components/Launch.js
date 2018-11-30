import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
           flight_number
           mission_name
           launch_year
           launch_success
           launch_date_local
           rocket {
               rocket_id
               rocket_name
               rocket_type
           }
        }
    }
`;


export class Launch extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Launch

