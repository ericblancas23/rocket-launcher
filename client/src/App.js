import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launch from './components/Launch';
import Launches  from './components/launches';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
      <div className="container">
        <img src={logo} alt="space x" style={{ width: 300, display: 'block', margin: 'auto'}} />
       <Route exact path="/" component={ Launches } />
       <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
