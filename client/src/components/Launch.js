import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import classNames from 'classnames'

// const LAUNCH_QUERY = gql`
//     query LaunchQuery($flight_number: Int!) {
//         launch(flight_number: $flight_number) {
//            flight_number
//            mission_name
//            launch_year
//            launch_success
//            launch_date_local
//            rocket {
//                rocket_id
//                rocket_name
//                rocket_type
//            }
//         }
//     }
// `;


export class Launch extends Component {
  render() {
    // let { flight_number } = this.props.params;
    // flight_number = parseInt(flight_number);
    return (
      <div>
        {/* <Query query={LAUNCH_QUERY} variables={{ flight_number}}>
            {({ loading, error, data}) => {
                if(loading) return <h4>...Laoding</h4>;
                if (error) console.log(error);

                const {
                    mission_name,
                    flight_number,
                    launch_year,
                    launch_success,
                    rocket: {rocket_id, rocket_name, rocket_type}
                } = data.launch;
            }}
        </Query> */}
        <h1>Launch</h1>
      </div>
    )
  }
}

export default Launch

