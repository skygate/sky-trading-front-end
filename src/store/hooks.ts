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
  return id;
};

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

export const useNewCommentIndex = () =>
  useAppSelector((state) => state.undoReducer.present.comments.comments.length);

export const useCommentsSelector = (id?: number) =>
  useAppSelector((state) => {
    if (id)
      return state.undoReducer.present.comments.comments.find(
        (item) => item.id === id
      );
    return state.undoReducer.present.comments.comments;
  });

export const useModeSelector = () =>
  useAppSelector((state) => state.undoReducer.present.comments.isActive);

export const useDraftsSelector = (id?: number) =>
  useAppSelector((state) => {
    if (id) return state.drafts.find((item) => item.id === id);
    return state.drafts;
  });

export const useNewDraftIndex = () =>
  useAppSelector((state) => state.drafts[state.drafts.length - 1]?.id + 1 || 0);
