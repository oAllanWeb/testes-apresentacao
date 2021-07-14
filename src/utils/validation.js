import * as Yup from 'yup';
import { numbersOnly } from './mask';
const cardDate = /^(0[1-9]|1[012])\/[12][0-9]{3}$/;

const validCPF = (value) => {
  if (!value || value === '') {
    return false;
  }
  const cpf = value.replace(/[^\d]/g, '');
  let numeros;
  let digitos;
  let soma;
  let i;
  let resultado;
  let digitosIguais;
  digitosIguais = 1;
  if (cpf.length !== 11) {
    return false;
  }
  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) !== parseInt(cpf.charAt(i + 1), 10)) {
      digitosIguais = 0;
      break;
    }
  }
  if (!digitosIguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;
    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    resultado = soma % 11 < 2 ? 0 : (11 - (soma % 11));
    if (resultado !== parseInt(digitos.charAt(0), 10)) {
      return false;
    }
    numeros = cpf.substring(0, 10);
    soma = 0;
    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i;
    }
    resultado = soma % 11 < 2 ? 0 : (11 - (soma % 11));
    if (resultado !== parseInt(digitos.charAt(1), 10)) {
      return false;
    }
    return true;
  }
  return false;
};

export const transactionSchema = Yup.object().shape({
  credit_card_holder_name: Yup.string().required('Preencha o nome'),
  buyer_document: Yup.string().required('Preencha o CPF')
    .test('validCPF', 'CPF Inválido', value => validCPF(value)),
  credit_card_number: Yup.string()
    .min(17, 'N° do cartão inválido')
    .required('Preencha o N° do cartão'),
  credit_card_expiration_date: Yup.string()
    .matches(cardDate, 'Data de expiração inválido')
    .min(7, 'Data de expiração inválida')
    .max(7, 'Data de expiração inválida')
    .required('Preencha a Data de expiração'),
  credit_card_cvv: Yup.string()
    .min(3, 'CVV inválido')
    .max(4, 'CVV inválido')
    .required('Preencha o CVV'),
  amount: Yup.string()
    .test('test','Valor da transação Inválido', value => numbersOnly(value) > 0)
    .required('Preencha o Valor da transação'),
});
