import { createContext, useEffect, useState } from "react";
import {
  ThemeProvider as AmplifyThemeProvider,
  defaultDarkModeOverride,
} from "@aws-amplify/ui-react";

export const ThemeContext = createContext({
  colorMode: "system",
  setColorMode: () => {},
});

export default function ThemeProvider({ children }) {
  const [colorMode, setColorMode] = useState("system");

  useEffect(() => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") !== "system"
    ) {
      setColorMode(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (colorMode !== localStorage.getItem("theme") && colorMode !== "system") {
      localStorage.setItem("theme", colorMode);
    } else if (colorMode === "system") {
      localStorage.removeItem("theme");
    }
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <AmplifyThemeProvider
        theme={{
          name: "my-theme",
          overrides: [defaultDarkModeOverride],
        }}
        colorMode={colorMode}
      >
        {children}
      </AmplifyThemeProvider>
    </ThemeContext.Provider>
  );
}
