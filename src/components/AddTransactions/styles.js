import styled from 'styled-components';
import palette from '../../utils/palette';

export const Container = styled.div`
  display: flex;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  border-bottom: solid 1px ${palette.grey._100};
  height: calc(100vh - 46px - 96px);
`;

export const CustomLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

export const CustomLabelCVV = styled(CustomLabel)`
  max-width: 128px;
  margin-left: 8px;
`;

export const Label = styled.label`
  color: ${palette.grey._200};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  order: 1;
  padding-left: 2px;
  transition: 200ms ease all;
  background-color: ${palette.white._100};
  position: absolute;
  top: 12px;
  left: 14px;
`;

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  line-height: 48px;
  text-shadow: none;
  color: ${palette.grey._500};
  width: 100%;
  padding: 0;
  padding-left: 14px;
  order: 2;
  border: 1px solid ${palette.grey._200};
  box-sizing: border-box;
  border-radius: 6px;

  &:disabled{
    background-color: ${palette.grey._100};
  }

  &::placeholder{
    color: transparent;
  }

  &:focus {
    outline: 0;
    border-color: ${palette.grey._500};
  }

  &:focus + ${Label} {
    top: -12px;
  }

  &:not(:placeholder-shown) {
    border-color: ${palette.grey._500};
  }
  &:not(:placeholder-shown) + ${Label} {
    top: -12px;
  }
`;

export const Feedback = styled.div`
  position: absolute;
  bottom: 3px;
  font-size: 10px;
  left: 10px;
  color: red;
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
