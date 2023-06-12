import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

import InstagramIcon from "@/icons/medias/InstagramIcon";
import FacebookIcon from "@/icons/medias/FacebookIcon";
import TwitterIcon from "@/icons/medias/TwitterIcon";
import DiscordIcon from "@/icons/medias/DiscordIcon";

const Menu: Component = () => (
  <Main>
    <MenuItem href="/">About us</MenuItem>
    <MenuItem href="/">Pricing</MenuItem>
    <MenuItem href="/">How it works</MenuItem>
    <MenuItem href="/profile">My account</MenuItem>
    <Hr />
    <MediasWrapper>
      <FacebookIcon width="24px" height="24px" />
      <InstagramIcon width="24px" height="24px" />
      <TwitterIcon width="24px" height="24px" />
      <DiscordIcon width="24px" height="24px" />
    </MediasWrapper>
  </Main>
);

export default Menu;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 32px;
  width: 343px;
`;

const MenuItem = styled(A)`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const Hr = styled.div`
  width: 100%;
  border: 1px solid #2f2535;
`;

const MediasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: fit-content;
  margin: 0px auto;
  svg {
    cursor: pointer;
  }
`;
