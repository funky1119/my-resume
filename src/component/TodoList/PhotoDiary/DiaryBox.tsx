import React from "react";
import styled from "styled-components";

const DiaryBox = (): JSX.Element => {
  return (
    <DiaryBoxWrap>
      <IconButton>
        <Icon
          src={process.env.PUBLIC_URL + "/assets/image/left.png"}
          alt="left"
        />
      </IconButton>
      <ImageBox></ImageBox>
      <ImageBox></ImageBox>
      <ImageBox></ImageBox>
      <ImageBox></ImageBox>
      <IconButton>
        <Icon
          src={process.env.PUBLIC_URL + "/assets/image/right.png"}
          alt="left"
        />
      </IconButton>
    </DiaryBoxWrap>
  );
};

export default DiaryBox;

const DiaryBoxWrap = styled.div`
  background: linear-gradient(to bottom right, #c9b3e3, #d1c5df);
  width: 100%;
  height: 150px;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
`;
const IconButton = styled.button`
  width: 50px;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  position: relative;
  border-style: groove;
`;
