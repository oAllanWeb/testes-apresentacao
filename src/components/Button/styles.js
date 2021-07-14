import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import palette from '../../utils/palette';

export const SubmitButton = styled.button`
  background-color: ${palette.blue._300};
  box-shadow: 0px 4px 6px ${palette.blue.alfa._100};
  border-radius: 8px;
  height: 48px;
  max-width: 328px;
  width: 100%;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.white._100};
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    text-align: center;
    background-color: ${palette.grey._100};
    box-shadow: none;
    color: ${palette.grey._300}
  }
  &:hover{
    background-color: ${palette.blue._400};
  }
`;

export const LinkButton = styled(Link)`
  background-color: ${palette.blue._300};
  box-shadow: 0px 4px 6px ${palette.blue.alfa._100};
  border-radius: 8px;
  height: 48px;
  max-width: 328px;
  width: 100%;
  border-radius: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.white._100};
  text-decoration: none;
  border: none;
  outline: none;
  &:disabled {
    text-align: center;
    background-color: ${palette.grey._100};
    color: ${palette.green._300}
  }
  &:hover{
    background-color: ${palette.blue._400};
  }
`;

export const Icon = styled(ReactSVG)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

