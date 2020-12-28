import React, { useEffect } from "react";
import styld from "styled-components";
import Category from "../Category";
import { ICategory, IStore } from "../../types";
import { getStoresAPI } from "../../api/store";
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
  console.log(process.env.NODE_ENV);
  useEffect(() => {
    getStoresAPI().then((res) => console.log(res));
  }, []);

  return (
    <Wrapper>
      Map
      <Category categories={categories} />
    </Wrapper>
  );
};

export default Map;
