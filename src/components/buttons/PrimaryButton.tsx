import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import CenterWrapper from "@/components/shared/CenterWrapper";

interface Props {
  child?: Element;
  text: string;
}

const PrimaryButton: Component<Props> = ({ child, text }) => (
  <Main>
    <CenterWrapper>{child}</CenterWrapper>
    <CenterWrapper>{text}</CenterWrapper>
  </Main>
);

export default PrimaryButton;

const Main = styled.button`
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
`;
