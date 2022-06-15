import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { handleVisibility } from "./modalsSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStrategyCreationSelector = () =>
  useAppSelector((state) => state.undoReducer.present.strategyCreation);

export const useStrategyDetailsSelector = () =>
  useAppSelector((state) => state.undoReducer.present.strategyDetails);

export const useConditionsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.conditions.find((item) => item.id === id)
  );

export const useModalsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.modals.find((item) => item.id === id)
  );

export const useAssetsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.assets.find((item) => item.id === id)
  );

export const useCloseModal = (id: string) => {
  const dispatch = useDispatch();
  return () =>
    dispatch(
      handleVisibility({
        id,
        isOpen: false,
      })
    );
};

export const useOpenModal = (id: string) => {
  const dispatch = useDispatch();
  return () =>
    dispatch(
      handleVisibility({
        id,
        isOpen: true,
      })
    );
};
