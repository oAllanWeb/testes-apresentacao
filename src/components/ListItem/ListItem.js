import moment from 'moment';
import React, { memo } from 'react';
import { intToCurrency } from '../../utils/mask';
import { Amount, Container, MomentTransaction, Name, Row, Status } from './styles';
import PropTypes from 'prop-types';

const ListItem = ({item}) => (
  <Container className="list-item">
    <Row>
      <Name>
        {item.credit_card_holder_name}
      </Name>
      <Status>
        {item.status === 'paid' && 'Pago'}
        {item.status === 'refused' && 'Recusado'}
      </Status>
    </Row>
    <Row>
      <MomentTransaction>
        {moment(item.date).format('DD/MM/YYYY HH:mm:ss')}
      </MomentTransaction>
      <Amount>
        {intToCurrency(item.amount)}
      </Amount>
    </Row>
  </Container>
);

ListItem.propTypes = {
  item: PropTypes.object
};

export default memo(ListItem);