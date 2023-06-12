import { Component, JSX } from "solid-js";
import { useParams } from "@solidjs/router";
import { styled } from "solid-styled-components";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

interface Props {
  children: JSX.Element;
}

const DefaultLayout: Component<Props> = ({ children }) => {
  const { individual } = useParams();

  return (
    <Main>
      <Header />
      {children}
      {!individual && <Footer />}
    </Main>
  );
};

export default DefaultLayout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
