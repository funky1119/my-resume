import styled from "styled-components";
import Calendar from "./Calendar";
import PhotoDiary from "./PhotoDiary";
import Todo from "./Todo";

const TodoList = (): JSX.Element => {
  return (
    <Body>
      <Wrap>
        {/* 나눠줘야 돼 */}
        <SubWrap>
          <Todo />
        </SubWrap>
        <SubWrap>
          <Calendar />
          <PhotoDiary />
        </SubWrap>
      </Wrap>
    </Body>
  );
};

export default TodoList;

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  padding: 20px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px solid #e8b9f3;
  border-radius: 5px;
`;

const SubWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
`;
