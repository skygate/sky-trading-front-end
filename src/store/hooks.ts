import { findStrategyElement } from "helpers/findStrategyElement";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { handleModalVisibilityAction } from "./modalsSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStrategyCreationSelector = () =>
  useAppSelector((state) => state.undoReducer.present.strategyCreation);

export const useStrategyElementCreationSelector = (id: string) => {
  const elements = useAppSelector(
    (state) => state.undoReducer.present.strategyCreation
  );
  return findStrategyElement([elements], id);
};

export const useStrategyDetailsSelector = () =>
  useAppSelector((state) => state.undoReducer.present.strategyDetails);

export const useConditionsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.conditions.find((item) => item.id === id)
  );

export const useNewConditionIndex = () =>
  useAppSelector((state) => state.undoReducer.present.conditions.length);

export const useModalsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.modals.find((item) => item.id === id)
  );

export const useAssetsSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.assets.find((item) => item.id === id)
  );

export const useNewAssetsIndex = () =>
  useAppSelector((state) => state.undoReducer.present.assets.length);

export const useAllocationSelector = (id: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.allocation.find((item) => item.id === id)
  );

export const useNewAllocationIndex = () => {
  useAppSelector((state) => state.undoReducer.present.allocation.length);
};

export const useCloseModal = (id: string) => {
  const dispatch = useDispatch();
  return () =>
    dispatch(
      handleModalVisibilityAction({
        id,
        isOpen: false,
      })
    );
};

export const useOpenModal = (id: string) => {
  const dispatch = useDispatch();
  return () =>
    dispatch(
      handleModalVisibilityAction({
        id,
        isOpen: true,
      })
    );
};
