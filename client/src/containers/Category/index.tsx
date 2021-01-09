import React from "react";
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

const Category: React.FC<Props> = (props: Props) => {
  const { categories, loading } = useCategory();

  function renderCoupons() {
    if (categories.length === 0) return null;
    if (loading) return <span>loading</span>;
    return categories.map((coupon) => <div key={coupon.ID}>{coupon.name}</div>);
  }
  return <Wrapper>{renderCoupons()}</Wrapper>;
};

export default Category;
