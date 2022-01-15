import React, { useEffect, useState } from 'react';
import * as S from './style';
import { x } from '../../assests/signup';
import useSignup from '../../util/hooks/signup/useSignup';
import { useDispatch } from 'react-redux';
import { SIGNUP } from '../../modules/action/signup';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isSame, setIsSame] = useState<boolean>(true);
  const { setName, setEmail, setPassword } = useSignup().setState;
  const { password, isSuccessSignup } = useSignup().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') setName(event.target.value);
    else if (event.target.name === 'email') setEmail(event.target.value);
    else if (event.target.name === 'password') setPassword(event.target.value);
    else if (event.target.name === 'again') {
      if (password === event.target.value) {
        setIsSame(true);
      } else setIsSame(false);
    }
  };

  const signupClickHandler = () => {
    dispatch({ type: SIGNUP });
  };

  useEffect(() => {
    if (isSuccessSignup) navigate('/map');
  }, [isSuccessSignup]);

  return (
    <S.Signup>
      <S.SignupContent>
        <S.Title>회원가입</S.Title>
        <S.Input type={'text'} placeholder={'닉네임'} name='name' onChange={inputChangeHandler} />
        <S.Input type={'text'} placeholder={'이메일'} name='email' onChange={inputChangeHandler} />
        <S.Input
          type={'password'}
          placeholder={'비밀번호'}
          name='password'
          onChange={inputChangeHandler}
        />
        <S.Input
          type={'password'}
          placeholder={'비밀번호 확인'}
          name='again'
          onChange={inputChangeHandler}
        />
        {!isSame && (
          <S.ErrorMessage>
            <img src={x} />
            <p>비밀번호가 맞지 않아요.</p>
          </S.ErrorMessage>
        )}
        <S.LongBtn onClick={signupClickHandler}>
          <p>회원가입</p>
        </S.LongBtn>
      </S.SignupContent>
    </S.Signup>
  );
};

export default Signup;
