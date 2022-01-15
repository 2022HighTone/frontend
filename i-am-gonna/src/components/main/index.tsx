import React, { useEffect, useState } from 'react';
import * as S from './style';
import Login from '../login';
import Signup from '../signup';

const Main = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <S.Main>
      {isLogin && <Login setIsLogin={setIsLogin} />}
      {!isLogin && <Signup />}
    </S.Main>
  );
};

export default Main;
