import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllStores } from "../store/stores/actions";

export const useStores = () => {
  const { stores, loading } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStores());
  }, []);

  return { stores, loading } as const;
};
