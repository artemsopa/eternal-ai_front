import { Component, createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

import GetStarted from "@/components/popups/GetStarted";
import Recovery from "@/components/popups/Recovery";
import Login from "@/components/popups/Login";
import Menu from "@/components/popups/Menu";

import {
  TextButton,
  PrimaryButton,
  HorizontalWrapper,
} from "@/styles/styled/styles";

import LogoTextIcon from "@/icons/common/LogoTextIcon";
import LogoIcon from "@/icons/common/LogoIcon";
import MenuIcon from "@/icons/navigation/MenuIcon";
import XIcon from "@/icons/navigation/XIcon";

const Header: Component = () => {
  const [isPopup, setPopup] = createSignal<boolean>(false);

  const [isGetStarted, setGetStarted] = createSignal<boolean>(false);
  const [isLogin, setLogin] = createSignal<boolean>(false);
  const [isMenu, setMenu] = createSignal<boolean>(false);
  const [isRecovery, setRecovery] = createSignal<boolean>(false);

  createEffect(() => {
    isPopup()
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isPopup]);

  const menuButton = () => {
    if (isMenu()) {
      setPopup(false);
      setMenu(false);
    } else {
      setPopup(true);
      setMenu(true);
    }
    setLogin(false);
    setGetStarted(false);
    setRecovery(false);
  };

  const loginButton = () => {
    if (isLogin()) {
      setPopup(false);
      setLogin(false);
    } else {
      setPopup(true);
      setLogin(true);
    }
    setMenu(false);
    setGetStarted(false);
    setRecovery(false);
  };

  const getStartedButton = () => {
    if (isGetStarted()) {
      setPopup(false);
      setGetStarted(false);
    } else {
      setPopup(true);
      setGetStarted(true);
    }
    setMenu(false);
    setLogin(false);
    setRecovery(false);
  };

  const openLoginFromGetStarted = () => {
    setGetStarted(false);
    setLogin(true);
  };

  const openGetStartedFromLogin = () => {
    setLogin(false);
    setGetStarted(true);
  };

  const openRecoveryFromLogin = () => {
    if (isLogin()) {
      setLogin(false);
      setRecovery(true);
    }
  };

  const closeModal = () => {
    setPopup(false);
    if (isLogin()) {
      setLogin(false);
    } else if (isGetStarted()) {
      setGetStarted(false);
    } else if (isRecovery()) {
      setRecovery(false);
    }
  };

  return (
    <Main>
      <ContentWrapper isPopup={isPopup()}>
        <Content>
          {isMenu() ? (
            <MenuIconWrapper>
              <CloseButton onClick={menuButton}>
                <XIcon />
              </CloseButton>
            </MenuIconWrapper>
          ) : (
            !isPopup() && (
              <MenuIconWrapper>
                <MenuIcon onClick={menuButton} />
              </MenuIconWrapper>
            )
          )}
          <LogoBlock href="/">
            <LogoIcon />
            <LogoTextIcon />
          </LogoBlock>
          {isPopup() && !isMenu() ? (
            <CloseButtonModalWrapper>
              <CloseButton onClick={closeModal}>
                <XIcon />
              </CloseButton>
            </CloseButtonModalWrapper>
          ) : (
            <ButtonsWrapper>
              <TextButton onClick={loginButton}>Login</TextButton>
              <PrimaryButton
                width="185px"
                height="48px"
                onClick={getStartedButton}
              >
                <HorizontalWrapper>Get started</HorizontalWrapper>
              </PrimaryButton>
            </ButtonsWrapper>
          )}
        </Content>
        {isPopup() && (
          <Popup>
            {isMenu() && <Menu />}
            {isGetStarted() && (
              <GetStarted openLogin={openLoginFromGetStarted} />
            )}
            {isLogin() && (
              <Login
                openGetStarted={openGetStartedFromLogin}
                openRecovery={openRecoveryFromLogin}
              />
            )}
            {isRecovery() && <Recovery closeModal={closeModal} />}
          </Popup>
        )}
      </ContentWrapper>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const ContentWrapper = styled.div<{ isPopup: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ isPopup }) =>
    isPopup
      ? `
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(77px);`
      : ""}
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding: 25px 32px;
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  letter-spacing: 0.3em;
  color: #ffffff;
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 112px;
  height: calc(100% - 112px);
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

const LogoBlock = styled(A)`
  margin: auto;
  padding: 6px;
  display: flex;
  flex-direction: row;
  gap: 18px;
  text-transform: uppercase;
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

const CloseButtonModalWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const CloseButton = styled.div`
  margin: auto 0px;
  background: #000000;
  border: 1px solid #2f2535;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  svg {
    margin: auto;
  }
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
