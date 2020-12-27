import * as React from "react";
import styld from "styled-components";

import Coupon from "./Coupon";
import Map from "./Map";

import "../style/reset.css";
import "../style/global.css";

const Layout = styld.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const Wrapper = styld.div`
  width: 375px;
  height: 100%;
  padding: 1%;
  border: 1px solid black;
`;

const App = () => (
  <Layout>
    <Wrapper>
      <Coupon></Coupon>
      <Map></Map>
    </Wrapper>
  </Layout>
);

export default App;
