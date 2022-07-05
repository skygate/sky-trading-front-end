import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentsInterface {
  id: number;
  content: string;
  posX: number;
  posY: number;
  isOpen: boolean;
}

interface CommentsState {
  isActive: boolean;
  comments: CommentsInterface[];
}

interface HandleCommentVisibilityPayload {
  id: number;
  isOpen: boolean;
}

interface EditCommentContentPayload {
  id: number;
  content: string;
}

const initialState: CommentsState = {
  isActive: false,
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setCommentModeAction(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    pushCommentAction(state, action: PayloadAction<CommentsInterface>) {
      state.comments.push(action.payload);
    },
    deleteCommentAction(state, action: PayloadAction<number>) {
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload
      );
    },
    editCommentContentAction(
      state,
      action: PayloadAction<EditCommentContentPayload>
    ) {
      const found = state.comments.find(
        (item) => item.id === action.payload.id
      );
      if (found) found.content = action.payload.content;
    },
    handleCommentVisibilityAction(
      state,
      action: PayloadAction<HandleCommentVisibilityPayload>
    ) {
      const found = state.comments.find(
        (item) => item.id === action.payload.id
      );
      if (found) found.isOpen = action.payload.isOpen;
    },
  },
});

export const {
  setCommentModeAction,
  pushCommentAction,
  deleteCommentAction,
  editCommentContentAction,
  handleCommentVisibilityAction,
} = commentsSlice.actions;
export default commentsSlice.reducer;
