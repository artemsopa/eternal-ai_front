import { Component, For } from "solid-js";
import { styled } from "solid-styled-components";

import Background from "@/assets/images/backgrounds/main.png";

import DefaultLayout from "@/layouts/DefaultLayout";

import IndividualItem from "@/components/individuals/IndividualItem";
import Questions from "@/components/home/Questions";

import { individualsList } from "@/data/individualsList";

const Home: Component = () => (
  <DefaultLayout>
    <Main>
      <Banner src={Background} />
      <QuestionnsWrapper>
        <Questions />
      </QuestionnsWrapper>
      <IndividualsWrapper>
        <TextWrapper>
          <PrimaryText>Individuals</PrimaryText>
          <SecondaryText>
            Ask a question to your favorite person and get a realistic response
          </SecondaryText>
        </TextWrapper>
        <IndividualsList>
          <For each={individualsList}>
            {(item) => <IndividualItem individual={item} />}
          </For>
        </IndividualsList>
      </IndividualsWrapper>
    </Main>
  </DefaultLayout>
);

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  margin-bottom: 150px;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const QuestionnsWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 0;
  right: 0;
  margin: 0px auto;
  width: fit-content;
  z-index: 1;
`;

const IndividualsWrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1432px;
  width: 100%;
  padding: 0px 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
`;

const PrimaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #ffffff;
`;

const SecondaryText = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  opacity: 0.7;
`;

const IndividualsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;
