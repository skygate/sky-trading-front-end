import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { handleModalVisibilityAction } from "./modalsSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useStrategyCreationSelector = () =>
  useAppSelector((state) => state.undoReducer.present.strategyCreation);

export const useConditionsSelector = (sectionType: string) =>
  useAppSelector((state) =>
    state.undoReducer.present.conditions.find(
      (item) => item.section === sectionType
    )
  );

export const useNewConditionIndex = () =>
  useAppSelector((state) => state.undoReducer.present.conditions.length);

export const useModalsSelector = () =>
  useAppSelector((state) => state.undoReducer.present.modals);

export const useOpenModal = (key1: string, key2?: string) => {
  const dispatch = useAppDispatch();
  return () =>
    dispatch(
      handleModalVisibilityAction({
        key1,
        key2,
        value: true,
      })
    );
};

export const useCloseModal = (key1: string, key2?: string) => {
  const dispatch = useAppDispatch();
  return () =>
    dispatch(
      handleModalVisibilityAction({
        key1,
        key2,
        value: false,
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
