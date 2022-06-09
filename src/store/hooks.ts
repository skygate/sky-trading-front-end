import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStrategyCreationSelector = () =>
  useAppSelector((state) => state.strategyCreation);

export const useStrategyDetailsSelector = () =>
  useAppSelector((state) => state.strategyDetails);
