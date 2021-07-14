/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import Api from '../../utils/Api';
import Layout from '../Layout';
import List from '../List';
import Button from '../Button';
import AddIcon from '../../assets/icons/Add.svg';
import { BoxButton } from './styles';
import { useToasts } from 'react-toast-notifications';

const Home = () => {
  const {addTransactions, transactions} = useContext(TransactionsContext);
  const { addToast } = useToasts();
  
  async function getTransactios() {
    const { data, error } = await Api.get('/transactions');
    if(data){
      addTransactions(data.sort((a, b) => b.id - a.id));
    }
    if (error) {
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }
  
  useEffect(() => {
    if (!transactions.length) {
      getTransactios();
    }
  },[]);

  return(
    <Layout
      trasactionsNumber={transactions.length}
      trasactionsAmount={transactions.reduce((prev, curr) => prev + curr.amount, 0)}
    >
      <List items={transactions}/>
      <BoxButton>
        <Button icon={AddIcon} href="/new">Criar transação</Button>
      </BoxButton>
    </Layout>
  );
};

export default Home;