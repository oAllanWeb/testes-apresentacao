import React from 'react';

import '../../src/index.css';
import Header from '../components/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
export default {
  title: 'Header',
  component: Header
};

const Template = (args) => (
  <Router>
    <Route>
      <Header {...args}/>
    </Route>
  </Router>
);

export const HeaderWithNumbers = Template.bind({});

HeaderWithNumbers.args = {
  trasactionsNumber: 3,
  trasactionsAmount: 11113,
  title: null,
};

export const HeaderWithTitle = Template.bind({});

HeaderWithTitle.args = {
  trasactionsNumber: undefined,
  trasactionsAmount: undefined,
  title: 'Nova Transação',
};

