import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const PrimaryButton = styled.button<{ width?: string; height?: string }>`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  text-align: center;
  width: ${({ width }) => width ?? "fit-content"};
  height: ${({ height }) => height ?? "62px"};
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
  svg {
    margin: auto 0px;
  }
`;

export const SecondaryColorButton = styled.button<{ width?: string }>`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  border: 1px solid linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  text-align: center;
  width: ${({ width }) => width ?? "fit-content"};
  &:hover {
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  }
  svg {
    margin: auto 0px;
  }
`;

export const SecondaryWhiteButton = styled.button<{ width?: string }>`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  border: 1px solid #ffffff;
  border-radius: 88px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  text-align: center;
  width: ${({ width }) => width ?? "fit-content"};
  position: relative;
  &:hover {
    border: none;
  }
  &:hover ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 88px;
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
  svg {
    margin: auto 0px;
  }
`;

export const TextButton = styled.div<{ opacity?: number }>`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: ${({ opacity }) => opacity ?? 1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #f82d98;
  }
`;

export const LinkWrapper = styled(A)`
  width: fit-content;
  height: fit-content;
  margin: auto 0px;
`;

export const HorizontalWrapper = styled.div`
  margin: auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

export const Input = styled.input``;
