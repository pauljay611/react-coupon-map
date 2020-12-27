import React from "react";
import styld from "styled-components";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 200px;
    margin-bottom: 2%;
    border: 1px solid black;
`;

const Coupon: React.FC<Props> = (props: Props) => {
  return <Wrapper>Coupon</Wrapper>;
};

export default Coupon;
