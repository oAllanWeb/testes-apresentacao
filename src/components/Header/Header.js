import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';
import ArrowBack from '../../assets/icons/ArrowBack.svg';
import { BoxNumbers, BoxWithTitle, ButtonBack, Container } from './styles';
import PropTypes from 'prop-types';
import { intToCurrency } from '../../utils/mask';
import { useHistory } from 'react-router-dom';


const Header = ({ trasactionsNumber,  trasactionsAmount, title }) => {
  const history = useHistory(); 

  return(
    <Container>
      {title && (
        <BoxWithTitle>
          <ButtonBack onClick={()=> history.push('/')}>
            <ReactSVG src={ArrowBack}/>
          </ButtonBack>
          <h2>{title}</h2>
          <div></div>
        </BoxWithTitle>
      )}
      {trasactionsNumber >= 0  && trasactionsAmount >= 0 && (
        <BoxNumbers>
          <div className="box">
            <span className="description">
              Número de transações
            </span>
            <span className="value">
              {trasactionsNumber}
            </span>
          </div>
          <div className="box">
            <span className="description">
              Valor total
            </span>
            <span className="value">
              {intToCurrency(trasactionsAmount)}
            </span>
          </div>
        </BoxNumbers>
      )}
    </Container>
  );
};

Header.propTypes = {
  trasactionsNumber: PropTypes.number,
  trasactionsAmount: PropTypes.number,
  title: PropTypes.string,
};

export default memo(Header);