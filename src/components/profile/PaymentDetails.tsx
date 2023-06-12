import { Component, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

import {
  HorizontalWrapper,
  PrimaryButton,
  SecondaryWhiteButton,
  TextButton,
} from "@/styles/styled/styles";

import PaymentCardIcon from "@/icons/payment/PaymentCardIcon";

const PaymentDetails: Component = () => {
  const [isUpdate, setUpdate] = createSignal<boolean>(false);

  return (
    <Main>
      <InfoWrapper>
        <PlanBox>Pro</PlanBox>
        <PrimaryText>$10 / month</PrimaryText>
        <SecondaryText>
          Next payment will be processed on April 6, 2023
        </SecondaryText>
      </InfoWrapper>
      {isUpdate() ? (
        <InputWrapper>
          <PaymentInput>
            <CardNumberWrapper>
              <HorizontalWrapper>
                <PaymentCardIcon />
              </HorizontalWrapper>
              <Input
                width="175px"
                type="text"
                placeholder="Card Number"
                maxLength={19}
              />
            </CardNumberWrapper>
            <InputsWrapper>
              <Input
                width="74px"
                type="text"
                placeholder="MM / YY"
                maxLength={7}
              />
              <Input width="40px" type="text" placeholder="CVC" maxLength={3} />
            </InputsWrapper>
          </PaymentInput>
          <PrimaryButton width="120px" onClick={() => setUpdate(false)}>
            <HorizontalWrapper>Save</HorizontalWrapper>
          </PrimaryButton>
        </InputWrapper>
      ) : (
        <>
          <ButtonWrapper>
            <SecondaryWhiteButton width="100%" onClick={() => setUpdate(true)}>
              <HorizontalWrapper>Update payment</HorizontalWrapper>
            </SecondaryWhiteButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <TextButton opacity={0.7}>
              <HorizontalWrapper>Cancel subscription</HorizontalWrapper>
            </TextButton>
          </ButtonWrapper>
        </>
      )}
    </Main>
  );
};

export default PaymentDetails;

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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  font-family: "Avenir";
  font-style: normal;
`;

const PlanBox = styled.div`
  position: relative;
  margin: auto;
  width: 66px;
  height: 42px;
  padding: 14px 16px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
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
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const SecondaryText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const PaymentInput = styled.div`
  width: calc(100% - 136px);
  height: 62px;
  background: #060608;
  border: 1px solid #2f2535;
  border-radius: 16px;
  padding: 17.5px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Input = styled.input<{ width: string }>`
  border: none !important;
  border-radius: 0px !important;
  padding: 0px 1px !important;
  height: 27px !important;
  width: ${({ width }) => width} !important;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
