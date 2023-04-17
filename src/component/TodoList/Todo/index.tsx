import React from "react";
import styled from "styled-components";
import TitleCompoent from "../../Common/Title";
import StatusBox from "./StatusBox";
import Todos from "./Todos";

const Todo = (): JSX.Element => {
  const handleClick = () => {};

  return (
    <TodoBdoy>
      <div>
        <TitleCompoent title={"To-Do List"} />
      </div>
      <StatusWrap>
        <StatusBox status="전체" count={1} />
        <StatusBox status="진행중" count={2} />
        <StatusBox status="완료" count={3} />
      </StatusWrap>
      <Todos />
    </TodoBdoy>
  );
};

export default Todo;

const TodoBdoy = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const StatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
