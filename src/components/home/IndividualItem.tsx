import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import useHover from "@/hooks/useHover";

import { Individual } from "@/types/Individual";

interface Props {
  individual: Individual;
}

const IndividualItem: Component<Props> = ({ individual }) => {
  const { attachRef, isHovered } = useHover();

  return (
    <Main url={individual.background} ref={attachRef}>
      <Img url={individual.img} />
      <Description isHovered={isHovered()}>
        <PrimaryText>{individual.name}</PrimaryText>
        <SecondaryText>{individual.about}</SecondaryText>
      </Description>
    </Main>
  );
};

export default IndividualItem;

const Main = styled.div<{ url: string }>`
  width: 260px;
  height: 298px;
  border-radius: 16px;
  background: url(${({ url }) => url});
  background-size: cover;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const Img = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url});
  background-size: cover;
`;

const Description = styled.div<{ isHovered: boolean }>`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(88, 48, 102, 0.2);
  backdrop-filter: blur(22px);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
`;

const PrimaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
`;

const SecondaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
`;
