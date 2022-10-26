import { store } from "./store/configureStore";
import AppComponent from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/styles.css";
import colors from "./constants/colors";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      faded: string;
      danger: string;
      contentBackground: string;
      border: string;
      white: string;
      icons: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      faded?: string;
      danger?: string;
      contentBackground?: string;
      border?: string;
      white?: string;
      icons?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    text: {
      primary: colors.text,
    },
    primary: {
      main: colors.primary,
    },
    warning: {
      main: colors.warning,
    },
    success: {
      main: colors.success,
    },

    custom: {
      faded: colors.faded,
      danger: colors.danger,
      contentBackground: colors.contentBackground,
      border: colors.border,
      white: colors.white,
      icons: "#979797",
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppComponent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
