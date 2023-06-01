import type { Component } from "solid-js";
import { styled } from "solid-styled-components";

import LogoTextIcon from "@/icons/common/LogoTextIcon";
import LogoIcon from "@/icons/common/LogoIcon";
import MenuIcon from "@/icons/common/MenuIcon";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextButton from "@/components/buttons/TextButton";

const Header: Component = () => {
  return (
    <Main>
      <MenuIconWrapper>
        <MenuIcon />
      </MenuIconWrapper>
      <LogoBlock>
        <LogoIcon />
        <LogoTextIcon />
      </LogoBlock>
      <ButtonsWrapper>
        <TextButton text="Login" />
        <PrimaryButton text="Get started" />
      </ButtonsWrapper>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding: 47px 32px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

const MenuIconWrapper = styled.div`
  margin: auto 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 250px;
  svg {
    cursor: pointer;
  }
  &:hover svg path {
    fill: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%), #d9d9d9;
  }
`;

const LogoBlock = styled.div`
  margin: auto 0px;
  display: flex;
  flex-direction: row;
  gap: 18px;
  cursor: pointer;
  svg {
    margin: auto 0px;
  }
`;

const ButtonsWrapper = styled.div`
  margin: auto 0px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 32px;
  width: 250px;
  div,
  button {
    margin: auto 0px;
  }
`;
