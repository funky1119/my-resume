import React from "react";
import styled from "styled-components";

const Todos = (): JSX.Element => {
  const handleClick = () => {};

  return (
    <>
      <AddButton>
        <AddText>추가</AddText>
        <AddText>+</AddText>
      </AddButton>
      <AddContents>
        <AddContentsText>+ 내용을 입력해주세요.</AddContentsText>
      </AddContents>
      <Table>
        <Tr>
          <Td index={-1} column={0}>
            <CheckboxForm>
              <Checkbox type="checkbox" />
            </CheckboxForm>
          </Td>
          <Td index={-1} colSpan={2} style={{ textAlign: "left" }}>
            전체선택
          </Td>
          <Td index={-1} column={3}>
            전체삭제
          </Td>
        </Tr>
        <Tr>
          <Td column={0}>
            <CheckboxForm>
              <Checkbox type="checkbox" />
            </CheckboxForm>
          </Td>
          <Td column={1}>2</Td>
          <Td column={2}>3</Td>
          <Td column={3}>X</Td>
        </Tr>
      </Table>
    </>
  );
};

export default Todos;

const AddButton = styled.button`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #a77cd7;
`;
const AddText = styled.div`
  font-size: 18px;
  color: #a77cd7;
`;
const AddContents = styled.div`
  padding: 10px 0px;
`;
const AddContentsText = styled.span`
  font-size: 14px;
  color: #a77cd7;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #a77cd7;
  font-size: 14px;
  margin-top: 20px;
`;
const Tr = styled.tr`
  border: 1px solid #a77cd7;
  line-height: 45px;
  height: 40px;
`;
const Td = styled.td<{ index?: Number; column?: Number }>`
  border: ${(props) => props.index !== -1 && "1px solid #a77cd7"};
  width: ${(props) =>
    props.column === 0
      ? "8%"
      : props.column === 1
      ? "55%"
      : props.column === 2
      ? "25%"
      : "12%"};
  vertical-align: middle;
`;

const CheckboxForm = styled.div`
  display: flex;
  justify-content: center;
`;
const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
    background: #a77cd7;
    border: none;
  }
`;
