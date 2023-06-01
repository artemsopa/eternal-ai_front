import { Component } from "solid-js";
import { styled } from "solid-styled-components";

interface Props {
  text: string;
}

const TextButton: Component<Props> = ({ text }) => <Main>{text}</Main>;

const Main = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
`;

export default TextButton;
