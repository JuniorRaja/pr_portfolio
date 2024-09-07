import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorState {
  primaryColor: string;
}

const initialState: ColorState = {
  primaryColor: "#8B5CF6", // Default purple color
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor } = colorSlice.actions;
export default colorSlice.reducer;
