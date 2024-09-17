import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("isDarkMode") === "true";


const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: savedTheme || false,
    },
    reducers: {
        toggleTheme(state) {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem("isDarkMode", state.isDarkMode)
        },
    
    }
});

export const { toggleTheme} = ThemeSlice.actions;

export default ThemeSlice.reducer;
