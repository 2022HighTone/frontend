import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterx } from '../../assests/map';
import useMap from '../../util/hooks/map/useMap';
import * as S from './style';

interface Props {
  setIsClickProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const User: FC<Props> = props => {
  const { setIsClickProfile } = props;
  const { state } = useMap();
  const navigate = useNavigate();
  const xBtnClickHandler = () => {
    setIsClickProfile(false);
  };
  const logoutBtnClickHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <S.User>
      <S.ProfilFirstLine>
        <S.ProfileName>{state.name}</S.ProfileName>
        <img src={filterx} onClick={xBtnClickHandler} />
      </S.ProfilFirstLine>
      <S.ProfileEmail>{state.email}</S.ProfileEmail>
      <S.ProfileMiddleLine />
      <S.Logout onClick={logoutBtnClickHandler}>로그아웃</S.Logout>
    </S.User>
  );
};

export default User;
