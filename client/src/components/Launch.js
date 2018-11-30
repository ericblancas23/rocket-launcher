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
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
            {({ loading, error, data}) => {
                if(loading) return <h4>...Loading</h4>;
                if (error) console.log(error);

                const {
                    mission_name,
                    flight_number,
                    launch_year,
                    launch_success,
                    rocket: { rocket_id, rocket_name, rocket_type }
                } = data.launch

                console.log(data);
                return <div><h1 className="display-4 my-3"><span className="text-dark">Mission:</span>
                {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Flight: {flight_number}</li>
                </ul>
                <ul className="list-group">
                  <li className="list-group-item">Launch: {launch_year}</li>
                </ul>
                </div>
            }}
        </Query>
      </Fragment>
    )
  }
}

export default Launch


