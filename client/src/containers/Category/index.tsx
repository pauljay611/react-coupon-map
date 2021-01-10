import React, { useState } from "react";
import styld from "styled-components";
import { useCategory } from "../../hooks/category";

interface Props {}

const Wrapper = styld.div`
    display: flex;
    width: 100%;
    height: 30px;
    position: absolute;
    top: 20px;
    left:0;
    z-index: 999;
    background-color: #fff;
    border: 1px solid black;
`;

const CategoryItem = styld.div<{ active: boolean }>`
  flex: 1;
  border: 1px solid black;
  background-color: ${({ active }) => (active ? "green" : "#fff")}
`;

const Category: React.FC<Props> = (props: Props) => {
  const { categories, loading } = useCategory();

  const [activeItem, setActiveItem] = useState(0);

  function renderCategories() {
    if (categories.length === 0) return null;
    if (loading) return <span>loading</span>;
    return categories.map((category, index) => (
      <CategoryItem key={category.ID} active={activeItem === index}>
        {category.name}
      </CategoryItem>
    ));
  }
  return <Wrapper>{renderCategories()}</Wrapper>;
};

export default Category;
