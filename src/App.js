import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import AddTransactions from './components/AddTransactions/AddTransactions';
import Home from './components/Home/Home';
import TransactionsProvider from './contexts/TransactionsContext';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => (
  <Router>
    <TransactionsProvider>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/new">
            <AddTransactions/>
          </Route>
        </Switch>
      </ScrollToTop>
    </TransactionsProvider>
  </Router>
);

export default App;
