import { Formik } from 'formik';
import React, { useContext } from 'react';
import {
  intToCurrency,
  maskCpf,
  creditCardNumber,
  maskDateCreditCard,
  numbersOnly,
} from '../../utils/mask';
import Api from '../../utils/Api';
import { transactionSchema } from '../../utils/validation';
import Button from '../Button';
import Header from '../Header';
import { BoxButton } from '../Home/styles';
import Layout from '../Layout';
import { ContainerForm, CustomLabel, CustomLabelCVV, BoxInput, Label, Input, Feedback } from './styles';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const initialValues = {
  credit_card_holder_name: '',
  buyer_document: '',
  credit_card_number: '',
  credit_card_expiration_date: '',
  credit_card_cvv: '',
  amount: ''
};



const AddTransactions = () => {
  
  const { addToast } = useToasts();
  const history = useHistory(); 
  const {addTransactions} = useContext(TransactionsContext);
  const sendTransaction = async (values) => {
    const {data, error} = await Api.post('/transactions',
      {
        credit_card_holder_name: values.credit_card_holder_name,
        buyer_document: numbersOnly(values.buyer_document),
        credit_card_number: numbersOnly(values.credit_card_number),
        credit_card_expiration_date: numbersOnly(values.credit_card_expiration_date),
        credit_card_cvv: numbersOnly(values.credit_card_cvv),
        amount: parseInt(numbersOnly(values.amount))
      }
    );
    if (error) {
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
      });
    }

    if (data) {
      addToast('Transação criada com Sucesso!', {
        appearance: 'success',
        autoDismiss: true,
        onDismiss:() => history.push('/')
      },() => {
        addTransactions(data);
      });
    }
  };

  return (
    <Layout>
      <Header title="Nova transação"/>
      <Formik
        initialValues={initialValues}
        validationSchema={transactionSchema}
        onSubmit={sendTransaction}
      >
        {({ handleSubmit, handleChange, handleBlur, setFieldValue, errors, touched, values, isSubmitting, isValid }) => (
          <form onSubmit={handleSubmit}>
            <ContainerForm>
              <BoxInput>
                <CustomLabel id="name">
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.credit_card_holder_name}
                    name="credit_card_holder_name"
                    placeholder="Nome da pessoa compradora"
                  />
                  <Label>Nome da pessoa compradora</Label>
                  {touched.credit_card_holder_name 
                  && errors.credit_card_holder_name 
                  && <Feedback className="error">{errors.credit_card_holder_name}</Feedback>}
                </CustomLabel>
              </BoxInput>
              <BoxInput>
                <CustomLabel id="cpf">
                  <Input
                    type="text"
                    onChange={e => setFieldValue('buyer_document', maskCpf(e.target.value))}
                    onBlur={handleBlur}
                    value={values.buyer_document}
                    maxLength="14"
                    name="buyer_document"
                    placeholder="CPF"
                  />
                  <Label>CPF</Label>
                  {touched.buyer_document
                  && errors.buyer_document
                  && <Feedback className="error">{errors.buyer_document}</Feedback>}
                </CustomLabel>
              </BoxInput>
              <BoxInput>
                <CustomLabel id="card-number">
                  <Input
                    type="text"
                    onChange={e => setFieldValue('credit_card_number', creditCardNumber(e.target.value))}
                    onBlur={handleBlur}
                    value={values.credit_card_number}
                    maxLength="19"
                    name="credit_card_number"
                    placeholder="N° do cartão"
                  />
                  <Label>N° do cartão</Label>
                  {touched.credit_card_number
                  && errors.credit_card_number
                  && <Feedback className="error">{errors.credit_card_number}</Feedback>}
                </CustomLabel>
              </BoxInput>
              <BoxInput>
                <CustomLabel id="expiration-date">
                  <Input
                    type="text"
                    onChange={e => setFieldValue('credit_card_expiration_date', maskDateCreditCard(e.target.value))}
                    onBlur={handleBlur}
                    value={values.credit_card_expiration_date}
                    maxLength="7"
                    name="credit_card_expiration_date"
                    placeholder="Data de expiração"
                  />
                  <Label>Data de expiração</Label>
                  {touched.credit_card_expiration_date
                  && errors.credit_card_expiration_date
                  && <Feedback className="error">{errors.credit_card_expiration_date}</Feedback>}
                </CustomLabel>
                <CustomLabelCVV id="cvv">
                  <Input
                    type="num"
                    onChange={e => setFieldValue('credit_card_cvv', numbersOnly(e.target.value))}
                    onBlur={handleBlur}
                    value={values.credit_card_cvv}
                    maxLength="4"
                    name="credit_card_cvv"
                    placeholder="CVV"
                  />
                  <Label>CVV</Label>
                  {touched.credit_card_cvv
                  && errors.credit_card_cvv
                  && <Feedback className="error">{errors.credit_card_cvv}</Feedback>}
                </CustomLabelCVV>
              </BoxInput>
              <BoxInput>
                <CustomLabel id="amount">
                  <Input
                    type="text"
                    onChange={e => setFieldValue('amount', intToCurrency(e.target.value))}
                    onBlur={handleBlur}
                    value={values.amount}
                    name="amount"
                    placeholder="Data de expiração"
                  />
                  <Label>Valor da transação</Label>
                  {touched.amount
                  && errors.amount
                  && <Feedback className="error">{errors.amount}</Feedback>}
                </CustomLabel>
              </BoxInput>
            </ContainerForm>        
            <BoxButton>
              <Button disabled={isSubmitting || !isValid} >Criar transação</Button>
            </BoxButton>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default AddTransactions;