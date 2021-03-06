import React, { FC, useState } from 'react';
import * as S from './style';
import {
  cafe,
  cafeActive,
  check,
  checkActive,
  chinese,
  chineseActive,
  fastfood,
  fastfoodActive,
  filterx,
  japanese,
  japaneseActive,
  korean,
  koreanActive,
  snack,
  snackActive,
} from '../../assests/map';

const initcheck = {
  first: false,
  second: false,
  third: false,
  fourth: false,
};

interface Props {
  setIsClickFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: FC<Props> = props => {
  const { setIsClickFilter } = props;
  const [isChecked, setIsCheked] = useState<boolean>(false);
  const [snackCheck, setSnackCheck] = useState<boolean>(false);
  const [cafeCheck, setCafeCheck] = useState<boolean>(false);
  const [koreanCheck, setKoreanCheck] = useState<boolean>(false);
  const [chineseCheck, setChineseCheck] = useState<boolean>(false);
  const [fastfoodCheck, setFastfoodCheck] = useState<boolean>(false);
  const [japaneseCheck, setJapaneseCheck] = useState<boolean>(false);
  const [priceCheck, setPriceCheck] = useState<{
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
  }>(initcheck);
  const [number, setNumber] = useState<number>(0);
  const priceBtnClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    switch (event.currentTarget.id) {
      case 'first':
        if (priceCheck.first) setPriceCheck({ ...initcheck, first: false });
        else if (!priceCheck.first) setPriceCheck({ ...initcheck, first: true });
        break;
      case 'second':
        if (priceCheck.second) setPriceCheck({ ...initcheck, second: false });
        else if (!priceCheck.second) setPriceCheck({ ...initcheck, second: true });
        break;
      case 'third':
        if (priceCheck.third) setPriceCheck({ ...initcheck, third: false });
        else if (!priceCheck.third) setPriceCheck({ ...initcheck, third: true });
        break;
      case 'fourth':
        if (priceCheck.fourth) setPriceCheck({ ...initcheck, fourth: false });
        else if (!priceCheck.fourth) setPriceCheck({ ...initcheck, fourth: true });
        break;
      default:
        break;
    }
  };
  const checkBtnClickHandler = () => {
    setIsCheked(!isChecked);
    if (!isChecked) {
      setSnackCheck(true);
      setChineseCheck(true);
      setCafeCheck(true);
      setKoreanCheck(true);
      setFastfoodCheck(true);
      setJapaneseCheck(true);
    } else {
      setSnackCheck(false);
      setChineseCheck(false);
      setCafeCheck(false);
      setKoreanCheck(false);
      setFastfoodCheck(false);
      setJapaneseCheck(false);
    }
  };
  const xBtnClickHandler = () => {
    setIsClickFilter(false);
  };
  return (
    <S.Filter>
      <S.FirstLine>
        <S.Title>??????</S.Title>
        <img src={filterx} alt='Icon' onClick={xBtnClickHandler} />
      </S.FirstLine>
      <S.SecondLine>
        <p>????????????</p>
        <div>
          {isChecked ? (
            <img src={checkActive} onClick={checkBtnClickHandler} alt='Icon' />
          ) : (
            <img src={check} onClick={checkBtnClickHandler} alt='Icon' />
          )}
          <p>?????? ??????</p>
        </div>
      </S.SecondLine>
      <S.TwoImgs>
        <S.ImgBox
          onClick={() => {
            setSnackCheck(!snackCheck);
          }}
          isCheck={snackCheck}
        >
          <S.Img src={snackCheck ? snackActive : snack} alt='Icon' />
          <p>??????</p>
        </S.ImgBox>
        <S.ImgBox
          onClick={() => {
            setCafeCheck(!cafeCheck);
          }}
          isCheck={cafeCheck}
        >
          <S.Img src={cafeCheck ? cafeActive : cafe} alt='Icon' />
          <p>?????????????????</p>
        </S.ImgBox>
      </S.TwoImgs>
      <S.TwoImgs>
        <S.ImgBox
          onClick={() => {
            setFastfoodCheck(!fastfoodCheck);
          }}
          isCheck={fastfoodCheck}
        >
          <S.Img src={fastfoodCheck ? fastfoodActive : fastfood} alt='Icon' />
          <p>???????????????</p>
        </S.ImgBox>
        <S.ImgBox
          onClick={() => {
            setKoreanCheck(!koreanCheck);
          }}
          isCheck={koreanCheck}
        >
          <S.Img src={koreanCheck ? koreanActive : korean} alt='Icon' />
          <p>??????</p>
        </S.ImgBox>
      </S.TwoImgs>
      <S.TwoImgs>
        <S.ImgBox
          onClick={() => {
            setChineseCheck(!chineseCheck);
          }}
          isCheck={chineseCheck}
        >
          <S.Img src={chineseCheck ? chineseActive : chinese} alt='Icon' />
          <p>??????</p>
        </S.ImgBox>
        <S.ImgBox
          onClick={() => {
            setJapaneseCheck(!japaneseCheck);
          }}
          isCheck={japaneseCheck}
        >
          <S.Img src={japaneseCheck ? japaneseActive : japanese} alt='Icon' />
          <p>??????</p>
        </S.ImgBox>
      </S.TwoImgs>
      <S.MiddleBar />
      <S.PriceTitle>?????????</S.PriceTitle>
      <S.PriceBox isCheck={priceCheck['first']} id='first' onClick={priceBtnClickHandler}>
        <p>0??? ~ 5000???</p>
      </S.PriceBox>
      <S.PriceBox isCheck={priceCheck['second']} id='second' onClick={priceBtnClickHandler}>
        <p>5000??? ~ 10000???</p>
      </S.PriceBox>
      <S.PriceBox isCheck={priceCheck['third']} id='third' onClick={priceBtnClickHandler}>
        <p>10000??? ~ 15000???</p>
      </S.PriceBox>
      <S.PriceBox isCheck={priceCheck['fourth']} id='fourth' onClick={priceBtnClickHandler}>
        <p>15000??? ~ 20000???</p>
      </S.PriceBox>
      <S.DirectionTitle>??????</S.DirectionTitle>
      <S.DirectionInput
        type={'range'}
        min={0}
        max={1000}
        step={100}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNumber(Number(event.currentTarget.value));
        }}
      />
      <S.DirectionNumber>{number}m ??????</S.DirectionNumber>
    </S.Filter>
  );
};

export default Filter;
