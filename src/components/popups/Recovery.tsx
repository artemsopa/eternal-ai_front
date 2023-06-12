import { Component, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import {
  HorizontalWrapper,
  Input,
  InputLabel,
  InputWrapper,
  PrimaryButton,
} from "@/styles/styled/styles";

interface Props {
  closeModal: () => void;
}

const Recovery: Component<Props> = ({ closeModal }) => {
  const [isCode, setCode] = createSignal<boolean>(false);
  const [isPassword, setPassword] = createSignal<boolean>(false);

  return (
    <Main>
      <WelcomeTextWrapper>
        <PrimaryText>Recovery</PrimaryText>
      </WelcomeTextWrapper>
      {!isCode() && !isPassword() && (
        <>
          <InputWrapper>
            <InputLabel>Email</InputLabel>
            <Input type="email" placeholder="justin@gmail.com" />
          </InputWrapper>
          <PrimaryButton width="100%" onClick={() => setCode(true)}>
            <HorizontalWrapper>Send recovery code</HorizontalWrapper>
          </PrimaryButton>
        </>
      )}
      {isCode() && !isPassword() && (
        <>
          <InputWrapper>
            <InputLabel>Code</InputLabel>
            <Input type="text" placeholder="123dSAxa12" />
          </InputWrapper>
          <PrimaryButton width="100%" onClick={() => setPassword(true)}>
            <HorizontalWrapper>Confirm code</HorizontalWrapper>
          </PrimaryButton>
        </>
      )}
      {isCode() && isPassword() && (
        <>
          <InputWrapper>
            <InputLabel>New password</InputLabel>
            <Input
              type="password"
              placeholder="••••••••••••••••••••••••••••••••••••••"
            />
          </InputWrapper>
          <PrimaryButton width="100%" onClick={closeModal}>
            <HorizontalWrapper>Set new password</HorizontalWrapper>
          </PrimaryButton>
        </>
      )}
    </Main>
  );
};

export default Recovery;

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
