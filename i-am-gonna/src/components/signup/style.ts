import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';

export const Signup = styled.div`
  width: 502.5px;
  background-color: white;
  height: 100vh;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupContent = styled.div`
  width: 405px;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 23px;
`;

export const Input = styled.input`
  width: 405px;
  height: 35px;
  background-color: ${color.input};
  border: none;
  border-radius: 16px;
  padding: 0px 15px;
  font-size: 15px;
  margin-top: 23px;
  ::placeholder {
    font-size: 15px;
    color: ${color.placeholder};
  }
`;

export const LongBtn = styled.div`
  width: 405px;
  height: 35px;
  background-color: ${color.secondary};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  cursor: pointer;
  > p {
    color: #ffffff;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 3px;
  > img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  > p {
    color: ${color.main};
    font-size: 12px;
  }
`;
