import React from "react";
import styld from "styled-components";
import { useCategory } from "../../hooks/category";
import { ICategory } from "../../types";
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
  const { categories, loading } = useCategory();

  function renderCoupons() {
    if (categories.length === 0) return null;
    if (loading) return <span>loading</span>;
    return categories.map((coupon) => <div key={coupon.ID}>{coupon.name}</div>);
  }
  return (
    <Wrapper>
      Category
      {renderCoupons()}
    </Wrapper>
  );
};

export default Category;
