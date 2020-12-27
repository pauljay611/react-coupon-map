import React from "react";
import styld from "styled-components";

interface Props {}

const Wrapper = styld.div`
    width: 100%;
    height: 30px;
    position: relative;
    top: 0;
    left:0;
    border: 1px solid black;
`;

const Category: React.FC<Props> = (props: Props) => {
  return <Wrapper>Category</Wrapper>;
};

export default Category;
