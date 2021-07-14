import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Home from '../components/Home/Home';
import TransactionsProvider from '../contexts/TransactionsContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../../src/index.css';
export default {
  title: 'Home',
  component: Home
};

const Template = (args) => (
  <TransactionsProvider>
    <ToastProvider>
      <Router>
        <Route>
          <Home {...args} />
        </Route>
      </Router>
    </ToastProvider>
  </TransactionsProvider>
);

export const ScreenHome = Template.bind({});