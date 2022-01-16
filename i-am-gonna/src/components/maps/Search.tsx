import React from 'react';
import * as S from './style';
import { searchIcon } from '../../assests/map';
import useSearch from '../../util/hooks/search/useSearch';
import { useDispatch } from 'react-redux';
import { SCHOOL } from '../../modules/action/search';

const Search = () => {
  const { setSchoolInput } = useSearch().setState;
  const dispatch = useDispatch();
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolInput(event.target.value);
  };

  const iconClickHandler = () => {
    dispatch({ type: SCHOOL });
  };

  return (
    <S.Search>
      <S.SearchInput
        type={'text'}
        placeholder={'학교 이름을 검색하세요.'}
        onChange={inputChangeHandler}
      />
      <S.SearchIcon src={searchIcon} onClick={iconClickHandler} />
    </S.Search>
  );
};

export default Search;
