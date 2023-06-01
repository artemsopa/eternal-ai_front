import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import CenterWrapper from "@/components/shared/CenterWrapper";

interface Props {
  child?: Element;
  text: string;
}

const SecondaryColorButton: Component<Props> = ({ child, text }) => (
  <Main>
    <CenterWrapper>{child}</CenterWrapper>
    <CenterWrapper>{text}</CenterWrapper>
  </Main>
);

export default SecondaryColorButton;

const Main = styled.button`
  border: 1px solid linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 66px;
  &:hover {
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  }
`;
