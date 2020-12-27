import React from "react";
import styld from "styled-components";
import Category from "../Category";
import { ICategory, IStore } from "../../types";

interface Props {
  categories: ICategory[];
  stores: IStore[];
}

const Wrapper = styld.div`
    width: 100%;
    height: 400px;
    position: relative;
    border: 1px solid black;
`;

const Map: React.FC<Props> = (props: Props) => {
  const { categories, stores } = props;

  return (
    <Wrapper>
      Map
      <Category categories={categories} />
    </Wrapper>
  );
};

export default Map;
