import { Component } from "solid-js";
import { styled } from "solid-styled-components";

import DefaultLayout from "@/layouts/DefaultLayout";

import AccountDetails from "@/components/profile/AccountDetails";
import PaymentDetails from "@/components/profile/PaymentDetails";

const Profile: Component = () => (
  <DefaultLayout>
    <Main>
      <AccountDetails />
      <PaymentDetails />
    </Main>
  </DefaultLayout>
);

export default Profile;

const Main = styled.div`
  margin: 160px auto 48px auto;
  font-family: "Avenir";
  font-style: normal;
  width: 760px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
