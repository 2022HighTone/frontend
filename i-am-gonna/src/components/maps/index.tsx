import React, { useEffect, useState } from 'react';
import * as S from './style';
import Search from './Search';
import Filter from './Filter';
import User from './User';
import DetailStore from './DetailStore';
import Menu from './Menu';
import { useDispatch } from 'react-redux';
import { DEFAULT_SCHOOL } from '../../modules/action/search';
import useSearch from '../../util/hooks/search/useSearch';
import {
  cafeMarker,
  chineseMarker,
  fastfoodMarker,
  filtering,
  japaneseMarker,
  koreanMarker,
  profile,
  snackMarker,
} from '../../assests/map';
import { GETUSERINFO } from '../../modules/action/map';

const Map = () => {
  const [isClickFilter, setIsClickFilter] = useState<boolean>(false);
  const [isClickProfile, setIsClickProfile] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { state } = useSearch();

  useEffect(() => {
    dispatch({ type: DEFAULT_SCHOOL });
  }, []);

  const filteringBtnClickHandler = () => {
    setIsClickFilter(true);
  };

  const profileBtnClickHandler = () => {
    setIsClickProfile(true);
    dispatch({ type: GETUSERINFO });
  };

  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(state.schoolLat, state.schoolLng),
        zoom: 17,
      });
      let marker = state.stores.map(data => {
        switch (data.category_name) {
          case 'KOREAN':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${koreanMarker} />`,
              },
            });
            break;
          case 'CAFE':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${cafeMarker} />`,
              },
            });
            break;
          case 'CHINESE':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${chineseMarker} />`,
              },
            });
            break;
          case 'JAPANESE':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${japaneseMarker} />`,
              },
            });
            break;
          case 'FASTFOOD':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${fastfoodMarker} />`,
              },
            });
            break;
          case 'SNACK':
            new naver.maps.Marker({
              position: new naver.maps.LatLng(data.latitude, data.longitude),
              map: map,
              icon: {
                content: `<img src=${snackMarker} />`,
              },
            });
            break;
          default:
            break;
        }
      });
    };
    initMap();
  }, [state.schoolLat, state.schoolLng]);

  return (
    <S.Map>
      <S.MapContent id='map'></S.MapContent>
      <Search />
      <S.FilteringBtnBox>
        <S.FilteringBtn src={filtering} onClick={filteringBtnClickHandler} />
      </S.FilteringBtnBox>
      {isClickFilter && <Filter setIsClickFilter={setIsClickFilter} />}
      <S.ProfileBtnBox>
        <img src={profile} alt='profileIcon' onClick={profileBtnClickHandler} />
      </S.ProfileBtnBox>
      {isClickProfile && <User setIsClickProfile={setIsClickProfile} />}
      <DetailStore />
      <Menu />
    </S.Map>
  );
};

export default Map;
