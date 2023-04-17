import React from "react";
import styled from "styled-components";

interface StyledStatusProps {
  readonly status: string;
}

const StatusBox = ({
  status,
  count,
}: {
  status: string;
  count: number;
}): JSX.Element => {
  return (
    <BoxWrap status={status}>
      <StatusText>{`${status} : ${count}`}</StatusText>
    </BoxWrap>
  );
};

export default StatusBox;

const BoxWrap = styled.div<StyledStatusProps>`
  padding: 15px 50px;
  background-color: ${({ status }) =>
    status === "전체"
      ? "#E8B3AC"
      : status === "진행중"
      ? "#E196A8"
      : "#C3A3E8"};
  border-radius: 12px;
  border: 2px solid
    ${({ status }) =>
      status === "전체"
        ? "#DD9287"
        : status === "진행중"
        ? "#D76A85"
        : "#B07EE9"};
  box-shadow: 10px 5px 5px
    ${({ status }) =>
      status === "전체"
        ? "#dc9a8f"
        : status === "진행중"
        ? "#d8718a"
        : "#af83e0"}; ;
`;

const StatusText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
