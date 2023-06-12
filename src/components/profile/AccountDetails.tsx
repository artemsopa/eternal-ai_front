import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import {
  InputWrapper,
  InputLabel,
  Input,
  PrimaryButton,
  HorizontalWrapper,
} from "@/styles/styled/styles";

const AccountDetails: Component = () => (
  <Main>
    <PrimaryText>Account Details</PrimaryText>
    <InputWrapper>
      <InputLabel>Name</InputLabel>
      <Input type="text" placeholder="Justin Mac" />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>Email</InputLabel>
      <Input type="email" placeholder="justin@gmail.com" />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>Phone number</InputLabel>
      <Input type="phone" placeholder="8329822222" />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>Password</InputLabel>
      <Input type="password" placeholder="•••••••••••••••••••" />
    </InputWrapper>
    <ButtonWrapper>
      <PrimaryButton width="210px">
        <HorizontalWrapper>Save</HorizontalWrapper>
      </PrimaryButton>
    </ButtonWrapper>
  </Main>
);

export default AccountDetails;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px;
  background: linear-gradient(
    90.83deg,
    rgba(4, 4, 16, 0.6) 11.84%,
    rgba(15, 3, 6, 0.6) 111.32%
  );
  backdrop-filter: blur(12px);
  border-radius: 32px;

  z-index: 0;
  position: relative;
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 32px;
    padding: 1px;
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.4) -2.34%,
      rgba(88, 51, 239, 0.4) 114.41%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const PrimaryText = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  z-index: 1;
`;
