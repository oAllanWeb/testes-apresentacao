import React from 'react';

import '../../src/index.css';
import Button from '../components/Button';
import AddIcon from '../../src/assets/icons/Add.svg';
import { Route, BrowserRouter as Router } from 'react-router-dom';
export default {
  title: 'Button',
  component: Button
};

const Template = (args) => (
  <Router>
    <Route>
      <Button {...args}/>
    </Route>
  </Router>
);

export const LinkButton = Template.bind({});

LinkButton.args = {
  icon: AddIcon,
  children: 'Criar transação',
  href:'/'
};

export const SubmitButton = Template.bind({});

SubmitButton.args = {
  icon: null,
  children: 'Criar transação',
  href:null,
  disabled: true
};