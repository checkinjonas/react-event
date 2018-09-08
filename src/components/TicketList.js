import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const FEED_QUERY = gql`
  query FEED_QUERY($customer_id: Int!, $id: Int!) {
    event(customer_id: $customer_id, id: $id) {
      # event(customer_id: 10003, id: 16251) {
      id
      categories {
        id
        name
        price
        additionals {
          id
          name
          children {
            id
            name
            price
          }
          available
          triggered_by
          left
        }
      }
    }
  }
`;

const TicketList = props => {
  const { customerId, eventId } = props;
  return (
    <Query
      query={FEED_QUERY}
      variables={{ customer_id: customerId, id: eventId }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Laster...</p>;
        if (error) return <p>Feil... {error.message}</p>;

        const categories = data.event.categories;

        return categories.map(category => (
          <Ticket key={category.id} category={category} data={data.event} />
        ));
      }}
    </Query>
  );
};

TicketList.propTypes = {
  customerId: PropTypes.number.isRequired,
  eventId: PropTypes.number.isRequired
};

export default TicketList;
