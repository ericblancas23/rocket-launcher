import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches  from './components/launches';
import LaunchItem from './components/LaunchItem';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="space x" style={{ width: 300, display: 'block', margin: 'auto'}} />
       <Launches />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
