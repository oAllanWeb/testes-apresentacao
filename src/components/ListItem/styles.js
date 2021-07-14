import styled from 'styled-components';
import palette from '../../utils/palette';

export const Container = styled.div`
  border-bottom: 1px solid ${palette.grey._100};
  padding: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${palette.grey._500};
`;

export const Status = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${palette.grey._300};
`;

export const MomentTransaction = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${palette.grey._500};
`;

export const Amount = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${palette.grey._600};
`;