import { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children: JSX.Element;
}

const Layout: Component<Props> = ({ children }) => (
  <Main>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    {children}
    <Footer />
  </Main>
);

export default Layout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
