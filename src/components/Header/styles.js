import styled from 'styled-components';
import palette from '../../utils/palette';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${palette.grey._100};
  padding: 0 16px;
  `;

export const BoxWithTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 46px;
  & h2 {
    font-weight: 400;
    font-size: 16px;
    color: ${palette.blue._400};
  }
`;

export const BoxNumbers = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  & .box {
    width: 50%;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
      width: 100%;
    }
    & .description {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 4px;
      color: ${palette.grey._700}
    }
    & .value {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      color: ${palette.green._100}
    }
  }
`;

export const ButtonBack = styled.button`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: ${palette.blue._200};
  & div {
    height:16px;
    display: block;
  }
`;
