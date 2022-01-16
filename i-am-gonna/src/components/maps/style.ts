import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';

export const Map = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
`;

export const MapContent = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Search = styled.div`
  width: 435px;
  height: 65px;
  background-color: white;
  position: absolute;
  top: 35px;
  right: 48px;
  border-radius: 24px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 405px;
  height: 35px;
  background-color: ${color.feight};
  border: none;
  border-radius: 16px;
  font-size: 15px;
  padding: 0px 14px;
  ::placeholder {
    font-size: 14px;
    color: ${color.placeholder};
  }
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-left: -30px;
`;

export const Filter = styled.div`
  width: 180px;
  height: 569px;
  background-color: #ffffff;
  position: absolute;
  top: 35px;
  left: 0px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

export const FirstLine = styled.div`
  width: 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px auto 17px auto;
  > img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const SecondLine = styled.div`
  width: 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  > p {
    font-size: 12px;
    color: ${color.secondary};
  }
  > div {
    display: flex;
    align-items: center;
    > p {
      font-size: 10px;
    }
    > img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
      cursor: pointer;
    }
  }
`;

export const Img = styled.img`
  width: 34px;
  height: 35px;
  margin: 0 auto;
`;

export const ImgBox = styled.div<{ isCheck: boolean }>`
  width: 67.5px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  ${({ isCheck }) => css`
    background-color: ${isCheck ? '#fef5ec' : '#ffffff'};
    color: ${isCheck ? color.main : '#000000'};
  `}
  > p {
    font-size: 12px;
    margin: 0 auto;
  }
`;

export const TwoImgs = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 7.6px;
`;

export const User = styled.div`
  width: 180px;
  height: 107px;
  background-color: #ffffff;
  position: absolute;
  top: 655px;
  left: 0px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
`;

export const MiddleBar = styled.div`
  width: 154px;
  height: 1px;
  background-color: ${color.input};
  margin: 11px auto;
`;

export const PriceTitle = styled.p`
  font-size: 12px;
  width: 150px;
  margin: 0 auto;
  color: ${color.secondary};
`;

export const PriceBox = styled.div<{ isCheck: boolean }>`
  width: 150px;
  height: 24px;
  cursor: pointer;
  margin: 0 auto;
  ${({ isCheck }) => css`
    background-color: ${isCheck ? color.main : color.feight};
    color: ${isCheck ? '#ffffff' : color.placeholder};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const DirectionTitle = styled(PriceTitle)`
  margin-top: 18px;
`;

export const DirectionInput = styled.input`
  width: 150px;
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  background: ${color.main};
  cursor: pointer;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #ffffff;
    cursor: pointer;
    border: 1px solid ${color.main};
    height: 18px;
    width: 9px;
    margin-top: -8px;
    border-radius: 24px;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${color.input};
    border-radius: 24px;
  }
`;

export const DirectionNumber = styled.p`
  width: 150px;
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const DetailStore = styled.div`
  width: 435px;
  height: 257px;
  background-color: #ffffff;
  border-radius: 24px;
  position: absolute;
  right: 48px;
  top: 113px;
`;

export const DetailImg = styled.div`
  width: 435px;
  height: 167px;
  background-color: ${color.main};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

export const DetailTitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-left: 15px;
`;

export const Menu = styled.div`
  width: 435px;
  height: 410px;
  background-color: #ffffff;
  position: absolute;
  top: 382px;
  right: 48px;
  border-radius: 24px;
`;

export const MenuTitleLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuTitle = styled.div<{ isCheck: boolean }>`
  width: 218.25px;
  height: 46px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isCheck }) => css`
    color: ${isCheck ? '#000000' : color.placeholder};
    font-weight: ${isCheck ? 500 : 'normal'};
    border-bottom: 6px solid ${isCheck ? color.secondary : '#ffffff'};
  `}
`;

export const MiddleDiv = styled.div`
  width: 100%;
  height: 27px;
  background-color: ${color.feight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  > p {
    font-size: 12px;
    font-weight: 300;
  }
  > img {
    width: 17px;
    height: 17px;
  }
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${color.input};
  > p {
    font-size: 18px;
  }
`;

export const FilteringBtnBox = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35px;
  left: 48px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export const FilteringBtn = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileBtnBox = styled(FilteringBtnBox)`
  top: 680px;
  left: 48px;
  cursor: pointer;
  > img {
    width: 40px;
    height: 40px;
  }
`;

export const ProfilFirstLine = styled.div`
  width: 146px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  > img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const ProfileName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ProfileEmail = styled.p`
  width: 146px;
  font-size: 12px;
  color: ${color.placeholder};
  margin: 0px auto 10px auto;
`;

export const ProfileMiddleLine = styled.div`
  width: 154px;
  margin: 0 auto;
  height: 1px;
  background-color: ${color.input};
`;

export const Logout = styled.u`
  font-size: 12px;
  color: ${color.main};
  width: 146px;
  display: block;
  margin: 0 auto;
  margin-top: 7px;
  cursor: pointer;
`;
