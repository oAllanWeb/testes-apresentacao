import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import AddTransactions from '../components/AddTransactions/AddTransactions';
import TransactionsProvider from '../contexts/TransactionsContext';
import '../../src/index.css';
export default {
  title: 'Form',
  component: AddTransactions
};

const Template = (args) => (
  <TransactionsProvider>
    <ToastProvider>
      <AddTransactions {...args} />
    </ToastProvider>
  </TransactionsProvider>
);

export const ScreenFrom = Template.bind({});