import React from "react";
import styled from "styled-components";
import TitleCompoent from "../../Common/Title";
import DiaryBox from "./DiaryBox";

const PhotoDiary = (): JSX.Element => {
  return (
    <PhotoDiaryBdoy>
      <div>
        <TitleCompoent title={"Photo Diary"} />
      </div>
      <DiaryWrap>
        <DiaryBox />
      </DiaryWrap>
    </PhotoDiaryBdoy>
  );
};

export default PhotoDiary;

const PhotoDiaryBdoy = styled.div`
  width: 100%;
  height: 28%;
  padding: 20px;
  margin-top: 1.8%;
`;

const DiaryWrap = styled.div`
  margin-top: 30px;
`;
