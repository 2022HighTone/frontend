import React, { FC, useEffect } from 'react';
import * as S from './style';
import useLogin from '../../util/hooks/login/useLogin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../modules/action/login';

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FC<Props> = props => {
  const { isSuccessLogin, id, password } = useLogin().state;
  const { setId, setPassword } = useLogin().setState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setIsLogin } = props;

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') setId(event.target.value);
    else if (event.target.name === 'password') setPassword(event.target.value);
  };

  const loginBtnClickHandler = () => {
    if (id !== '' && password !== '') dispatch({ type: LOGIN });
    else alert('이메일과 비밀번호를 입력해주세요.');
  };

  useEffect(() => {
    if (isSuccessLogin) navigate('/map');
  }, [isSuccessLogin]);

  return (
    <S.Login>
      <S.LoginContent>
        <S.Title>로그인</S.Title>
        <S.Input type={'text'} placeholder={'이메일'} name='email' onChange={inputChangeHandler} />
        <S.Input
          type={'password'}
          placeholder={'비밀번호'}
          name='password'
          onChange={inputChangeHandler}
        />
        <S.ShortBtnLine>
          <S.ShortBtn isLogin={true} onClick={loginBtnClickHandler}>
            <p>로그인</p>
          </S.ShortBtn>
          <S.ShortBtn
            isLogin={false}
            onClick={() => {
              navigate('/map');
            }}
          >
            <p>그냥 볼래요</p>
          </S.ShortBtn>
        </S.ShortBtnLine>
        <S.LongBtn
          onClick={() => {
            setIsLogin(false);
          }}
        >
          <p>회원가입</p>
        </S.LongBtn>
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;
