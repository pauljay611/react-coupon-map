import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllCategories } from "../store/categories/actions";

export const useCategory = () => {
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return { categories, loading } as const;
};
