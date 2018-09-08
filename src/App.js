import React, { Component } from 'react';
import './styles/App.css';
import TicketList from './components/TicketList';
import Apolloclient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new Apolloclient({
  uri: 'https://www.checkin.no/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <TicketList customerId={11188} eventId={16776} />
    </div>
  </ApolloProvider>
);

export default App;
