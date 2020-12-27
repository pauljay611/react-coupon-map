import * as React from "react";
import styld from "styled-components";

import Coupon from "./Coupon";
import Map from "./Map";

import { ICategory, IStore, ICoupon, CouponType } from "../types";

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

const mockCategories: ICategory[] = [
  { ID: "1", name: "drink", description: "soft drink" },
];

const mockStores: IStore[] = [
  {
    ID: "1",
    name: "John",
    description: "louisa coffee",
    lat: 25.0335,
    lng: 121.564,
    category_id: 1,
  },
];

const mockCoupons: ICoupon[] = [
  {
    ID: "1",
    name: "louisa coffee 50% off",
    description: "louisa coffee 50% off",
    type: CouponType.Discount,
    dueTimestamp: 1234567890,
    image: "https://cdn.webapp/image",
  },
];

const App = () => (
  <Layout>
    <Wrapper>
      <Coupon coupons={mockCoupons}></Coupon>
      <Map categories={mockCategories} stores={mockStores}></Map>
    </Wrapper>
  </Layout>
);

export default App;
