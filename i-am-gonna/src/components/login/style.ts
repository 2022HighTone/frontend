import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';

export const Login = styled.div`
  width: 502.5px;
  background-color: white;
  height: 100vh;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  width: 405px;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 46px;
`;

export const Input = styled.input`
  width: 405px;
  height: 35px;
  background-color: ${color.input};
  border: none;
  border-radius: 16px;
  padding: 0px 15px;
  font-size: 15px;
  margin-bottom: 23px;
  ::placeholder {
    font-size: 15px;
    color: ${color.placeholder};
  }
`;

export const ShortBtnLine = styled.div`
  width: 405px;
  display: flex;
  justify-content: space-between;
  margin-top: 37px;
`;

export const ShortBtn = styled.div<{ isLogin: boolean }>`
  width: 195px;
  height: 35px;
  ${({ isLogin }) => css`
    background-color: ${isLogin ? color.main : color.secondary};
  `}
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > p {
    color: #ffffff;
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
  margin-top: 15px;
  cursor: pointer;
  > p {
    color: #ffffff;
  }
`;
