import { Component, createSignal } from "solid-js";
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
import CheckedIcon from "@/icons/common/CheckedIcon";

interface Props {
  openLogin: () => void;
}

const GetStarted: Component<Props> = ({ openLogin }) => {
  const [isAbout, setAbout] = createSignal<boolean>(false);
  const [isChecked, setCheck] = createSignal<boolean>(false);

  return (
    <Main>
      {isAbout() ? (
        <>
          <WelcomeTextWrapper>
            <PrimaryText>About the platform</PrimaryText>
            <SecondaryText>
              All of the characters here are not real. Everything you see and
              hear is entirely generated by Artificial Intelligence machines.
              The opinions and beliefs expressed do not represent anyone. They
              are hallucinations of a bunch of 1s and 0s inside of a magic
              computer.
              <br />
              <br />
              The creators of this platform have the best intentions with this
              project, and deeply admire each and every character on the site.
              You might even say they are our Heroes. In fact, you can say that.
            </SecondaryText>
          </WelcomeTextWrapper>
          <CheckboxWrapper>
            <Checkbox onClick={() => setCheck(!isChecked())}>
              {isChecked() && <CheckedIcon />}
            </Checkbox>
            <SecondaryText>I have read the above statement</SecondaryText>
          </CheckboxWrapper>
          <PrimaryButton width="100%" onClick={() => setAbout(false)}>
            <HorizontalWrapper>Continue</HorizontalWrapper>
          </PrimaryButton>
        </>
      ) : (
        <>
          <WelcomeTextWrapper>
            <PrimaryText>Get started</PrimaryText>
            <SecondaryText>To continue please create an account</SecondaryText>
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
          <ButtonsWrapper>
            <SecondaryWhiteButton width="100%">
              <GoogleIcon />
              <HorizontalWrapper>Sign up with google</HorizontalWrapper>
            </SecondaryWhiteButton>
            <PrimaryButton width="100%" onClick={() => setAbout(true)}>
              <HorizontalWrapper>Sign up</HorizontalWrapper>
            </PrimaryButton>
          </ButtonsWrapper>
          <Hr />
          <SignInLink onClick={openLogin}>
            Already have an account? <SignInSpan>Sign in</SignInSpan>
          </SignInLink>
        </>
      )}
    </Main>
  );
};

export default GetStarted;

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

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  div {
    margin: auto 0px;
  }
`;

const Checkbox = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  svg {
    margin: auto;
  }
`;
