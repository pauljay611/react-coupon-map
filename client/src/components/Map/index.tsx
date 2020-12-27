import React from "react";
import styld from "styled-components";
import Category from "../Category";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const Map: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      Map
      <Category />
    </Wrapper>
  );
};

export default Map;
