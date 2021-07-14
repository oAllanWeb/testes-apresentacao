import React from 'react';
import { Container } from './styles';
import ListItem from '../ListItem';
import PropTypes from 'prop-types';

const List = ({ items }) => (
  <Container className="list">
    {items.length && items.map(item => <ListItem key={item.id} item={item}/>)}
  </Container>
);

List.propTypes = {
  items: PropTypes.array
};

export default List;