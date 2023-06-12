import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import LogoTextIcon from "@/icons/common/LogoTextIcon";
import FacebookIcon from "@/icons/medias/FacebookIcon";
import TwitterIcon from "@/icons/medias/TwitterIcon";
import YoutubeIcon from "@/icons/medias/YoutubeIcon";
import LogoIcon from "@/icons/common/LogoIcon";

const Footer: Component = () => (
  <Main>
    <Content>
      <LogoBlock>
        <LogoIcon />
        <LogoTextIcon />
      </LogoBlock>
      <RightsText>© 2023 Eternal. All rights reserved.</RightsText>
      <FolowUsWrapper>
        <FollowUsText>Follow us</FollowUsText>
        <FollowUsButtonsGroup>
          <MediaButton>
            <TwitterIcon />
          </MediaButton>
          <MediaButton>
            <FacebookIcon />
          </MediaButton>
          <MediaButton>
            <YoutubeIcon />
          </MediaButton>
        </FollowUsButtonsGroup>
      </FolowUsWrapper>
    </Content>
  </Main>
);

export default Footer;

const Main = styled.div`
  width: 100%;
  height: 204px;
  padding: 32px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background: #1d1d24;
  padding: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const RightsText = styled.div`
  margin: auto 0px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

const FolowUsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 228px;
`;

const FollowUsText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 110%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
  margin: auto 0px;
`;

const FollowUsButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const MediaButton = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0px;
  cursor: pointer;
  svg {
    margin: auto;
  }
  &:hover {
    background: linear-gradient(
      281.4deg,
      rgba(248, 45, 152, 0.8) -2.34%,
      rgba(88, 51, 239, 0.8) 114.41%
    );
  }
`;
