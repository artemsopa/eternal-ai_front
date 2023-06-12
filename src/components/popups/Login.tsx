import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import {
  HorizontalWrapper,
  Input,
  InputLabel,
  InputWrapper,
  PrimaryButton,
  SecondaryWhiteButton,
} from "@/styles/styled/styles";

import GoogleIcon from "@/icons/medias/GoogleIcon";

interface Props {
  openGetStarted: () => void;
  openRecovery: () => void;
}

const Login: Component<Props> = ({ openGetStarted, openRecovery }) => (
  <Main>
    <WelcomeTextWrapper>
      <PrimaryText>Login</PrimaryText>
    </WelcomeTextWrapper>
    <InputWrapper>
      <InputLabel>Email</InputLabel>
      <Input type="email" placeholder="justin@gmail.com" />
    </InputWrapper>
    <InputWrapper>
      <InputLabel>Password</InputLabel>
      <Input
        type="password"
        placeholder="••••••••••••••••••••••••••••••••••••••"
      />
    </InputWrapper>
    <SecondaryText onClick={openRecovery}>Forgot password?</SecondaryText>
    <ButtonsWrapper>
      <SecondaryWhiteButton width="100%">
        <GoogleIcon />
        <HorizontalWrapper>Sign up with google</HorizontalWrapper>
      </SecondaryWhiteButton>
      <PrimaryButton width="100%">
        <HorizontalWrapper>Sign in</HorizontalWrapper>
      </PrimaryButton>
    </ButtonsWrapper>
    <Hr />
    <SignInLink onClick={openGetStarted}>
      Don’t have an account? <SignInSpan>Sign up</SignInSpan>
    </SignInLink>
  </Main>
);

export default Login;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px;
  gap: 32px;
  width: 721px;
  background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
  border-radius: 32px;
  border: 1px solid linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  font-family: "Avenir";
  font-style: normal;

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

const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PrimaryText = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const SecondaryText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Hr = styled.div`
  width: 100%;
  border-top: 1px solid #2f2535;
`;

const SignInLink = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 0px auto;
  cursor: pointer;
`;

const SignInSpan = styled.span`
  color: #f82d98;
`;
