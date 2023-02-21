import { createSlice } from "@reduxjs/toolkit";
import { DataState, IEventLink } from "../../../interfaces";

const mokUser: IEventLink = {
  username: "",
  session: false,
};

export const initialState: DataState<IEventLink> = {
  value: mokUser,
  loading: false,
  error: "",
};

export const EventLinkSlice = createSlice({
  name: "list events creator",
  initialState,
  reducers: {
    //     userAuthenticatedOut(state, action) {
    //       state.value = { username: "", session: false };
    //     },
    //   },
    //   extraReducers: (builder) => {
    //     builder.addCase(loginAccount.pending, (state) => {
    //       state.loading = true;
    //       state.error = "";
    //     });
    //     builder.addCase(loginAccount.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.value = {
    //         username: action.payload.username,
    //         session: action.payload.session,
    //       };
    //     });
    //     builder.addCase(loginAccount.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message ?? "";
    //     });
  },
});

export default EventLinkSlice.reducer;
