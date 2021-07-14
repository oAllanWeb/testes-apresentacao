import Dinero from 'dinero.js';

Dinero.globalLocale = 'pt-BR';

export const maskCurrency  = amount => `R$ ${amount}`;

export const floatToCurrency = value => maskCurrency(
  value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.'),
);

export const intToCurrency = value => {
  return Dinero({ amount: Number(numbersOnly(value)), currency: 'BRL'}).toFormat();
};

export const maskPercentDiscount = amount => `-${amount.replace('.', ',')}%`;

export const numbersOnly = (text) => {
  text = String(text);
  if (text === '') {
    return text;
  }
  return text.replace(/[^0-9]+/g, '');
};

export const currencyToFloat = value => Number.parseFloat(value.replace(/\./, '').replace(',', '.'));

export const maskZipCode = (zipCode) => {
  let masked = numbersOnly(zipCode);
  if (masked.length > 5) {
    masked = `${masked.slice(0, 5)}-${masked.slice(5)}`;
  }
  if (masked.length > 9) {
    masked = masked.slice(0, -1);
  }
  return masked;
};

export const maskPhone = (phone) => {
  const specialNumbers = /^(\(?(03|08|09)|(\(?40)\)?(\s)?(0))/;
  const capitals = /^\(?40[^\d]?0/;

  if (specialNumbers.test(phone)) {
    if (capitals.test(phone)) {
      return phone
        .replace(/\D/g, '')
        .replace(/(\d{8})(\d)/, '$1')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }

    return phone
      .replace(/\D/g, '')
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .replace(/(\d{11})(\d)/, '$1')
      .replace(/(\d{7})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d{1,3})/, '$1 $2');
  }

  return phone
    .replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,4})/, '$1-$2')
    .replace(/(\d{5})(\d{5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1')
    .replace(/(\d{4})-(\d{1})(\d{4})/, '$1$2-$3');
};

export const maskCpf = cpf => cpf
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

export const maskDateCreditCard = (date) => {
  const unmasked = numbersOnly(date);
  if (unmasked.length < 3) {
    return unmasked;
  }
  return `${unmasked.slice(0, 2)}/${unmasked.slice(2, 6)}`;
};

export const maskDate = (date) => {
  const unmasked = numbersOnly(date);
  if (unmasked.length < 3) {
    return unmasked;
  }

  if (unmasked.length < 5) {
    return `${unmasked.slice(0, 2)}/${unmasked.slice(2, 4)}`;
  }

  return `${unmasked.slice(0, 2)}/${unmasked.slice(2, 4)}/${unmasked.slice(
    4,
    8,
  )}`;
};

export const creditCardNumber = (value) => {
  const unmasked = numbersOnly(value);
  if (unmasked.length < 5) {
    return unmasked;
  }

  if (unmasked.length < 9) {
    return unmasked.replace(/(\d{4})(\d)/, '$1 $2');
  }

  if (unmasked.length < 13) {
    return unmasked.replace(/(\d{4})(\d{4})(\d)/, '$1 $2 $3');
  }

  return unmasked
    .replace(/(\d{4})(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3 $4')
    .substr(0, 19);
};

export const dateUS = date => date.split('/').reverse().join('-');