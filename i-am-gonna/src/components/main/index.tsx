import React, { FC, useState } from 'react';
import * as S from './style';
import Login from '../login';
import Signup from '../signup';
import { artboard } from '../../assests/signup';

interface Props {}

const Main: FC<Props> = props => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <S.Main>
      <S.MainImg src={artboard} />
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <Signup />}
    </S.Main>
  );
};

export default Main;
