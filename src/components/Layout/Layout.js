import React from 'react';
import Header from '../Header';
import { Container } from './styles';

const Layout = ({children, title, trasactionsAmount, trasactionsNumber}) => 
  <Container>
    <Header
      title={title}
      trasactionsAmount={trasactionsAmount}
      trasactionsNumber={trasactionsNumber}
    />
    {children}
  </Container>;

export default Layout;