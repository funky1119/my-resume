import React from "react";
import styled from "styled-components";
import TitleCompoent from "../Common/Title";

const Todo = (): JSX.Element => {
  return (
    <TodoBdoy>
      <div>
        <TitleCompoent title={"To-Do List"} />
      </div>
    </TodoBdoy>
  );
};

export default Todo;

const TodoBdoy = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
