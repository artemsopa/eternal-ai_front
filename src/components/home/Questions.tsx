import { For } from "solid-js";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { questionsList } from "@/data/questionsList";

const Questions: Component = () => {
  return (
    <Main>
      <TextWrapper>
        <PrimaryText>Ask important people important questions</PrimaryText>
        <SecondaryText>
          Choose a question to quickly get a realistic response
        </SecondaryText>
      </TextWrapper>
      <QuestionsList>
        <For each={questionsList}>
          {(item) => <QuestionItem>{item}</QuestionItem>}
        </For>
      </QuestionsList>
    </Main>
  );
};

export default Questions;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  max-width: 690px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PrimaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
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
  text-align: center;
`;

const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  margin: 0px auto;
`;

const QuestionItem = styled.li`
  padding: 8px 8px 8px 48px;
  width: 534px;
  height: 76px;
  background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%);
  border-radius: 120px;
  border: 1px solid;
  border-image-source: linear-gradient(
    281.4deg,
    rgba(248, 45, 152, 0.3) -2.34%,
    rgba(88, 51, 239, 0.3) 114.41%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  cursor: pointer;
`;
