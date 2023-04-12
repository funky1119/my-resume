import React from "react";
import styled from "styled-components";

const TitleCompoent = ({ title }: { title: string }): JSX.Element => {
  return <Title>{title}</Title>;
};

export default TitleCompoent;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  border-bottom: 3px solid #0b0652;
  color: #0b0652;
`;
