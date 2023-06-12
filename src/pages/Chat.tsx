import { Component, For } from "solid-js";
import { styled } from "solid-styled-components";

import IndividualBackground from "@/assets/images/backgrounds/chat_individual.png";
import Background from "@/assets/images/backgrounds/chat.png";

import { chatList } from "@/data/chatList";
import SoundIcon from "@/icons/chat/SoundIcon";
import ShareIcon from "@/icons/chat/ShareIcon";
import DefaultLayout from "@/layouts/DefaultLayout";
import AnswerIcon from "@/icons/chat/AnswerIcon";

const Chat: Component = () => (
  <DefaultLayout>
    <Main>
      <CurrentIndividualBlock>
        <CurrentIndividualImg src={Background} />
        <IndividualInfo>
          <CurrentIndividualPrimaryText>
            Martin Luther King, Jr.
          </CurrentIndividualPrimaryText>
          <CurrentIndividualSecondaryText>
            Political Activist
          </CurrentIndividualSecondaryText>
        </IndividualInfo>
      </CurrentIndividualBlock>
      <CommunicationBlock>
        <MessagesBlock>
          <Question>What is the meaning of life?</Question>
          <For each={chatList}>
            {(item) => (
              <AnswerWrapper>
                <IndividualAvatarWrapper>
                  <IndividualAvatarBackground src={IndividualBackground} />
                  <IndividualAvatar src={item.img} />
                </IndividualAvatarWrapper>
                <Answer>{item.text}</Answer>
                <MediaWrapper>
                  <SoundIcon />
                  <ShareIcon />
                </MediaWrapper>
              </AnswerWrapper>
            )}
          </For>
        </MessagesBlock>
        <PrimaryAnswerBlock>
          <AnswerIcon width="100%" height="100%" />
        </PrimaryAnswerBlock>
      </CommunicationBlock>
    </Main>
  </DefaultLayout>
);

export default Chat;

const Main = styled.div`
  height: calc(100vh);
`;

const CurrentIndividualBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 0;
`;

const CurrentIndividualImg = styled.img`
  max-height: calc(100vh - 156px);
  height: 100%;
  width: fit-content;
`;

const IndividualInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0px auto;
`;

const CurrentIndividualPrimaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`;

const CurrentIndividualSecondaryText = styled.div`
  font-family: "Arquitecta";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 110%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
`;

const CommunicationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  max-width: 745px;
  width: 100%;
  position: absolute;
  top: 137px;
  right: 0;
  z-index: 1;
  padding-right: 40px;
`;

const MessagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  float: right;
  gap: 24px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.01em;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  gap: 8px;
  width: fit-content;
  height: 100px;
  background: #ffffff;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  color: #0a0806;
  margin-left: auto;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: relative;
`;

const IndividualAvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const IndividualAvatarBackground = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  filter: blur(5.38462px);
`;

const IndividualAvatar = styled.img`
  max-width: 60px;
  max-height: 60px;
  height: 100%;
  position: absolute;
  margin: auto;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 42px 115px 42px 48px;
  gap: 8px;
  isolation: isolate;
  height: 192px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  color: #e4e4e4;
  max-width: 640px;
  width: 100%;
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  svg {
    cursor: pointer;
  }
  svg:hover path {
    stroke: #f82d98;
  }
`;

const PrimaryAnswerBlock = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;

const PrimaryAnswer = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 42px;
  right: 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 28px;
`;
