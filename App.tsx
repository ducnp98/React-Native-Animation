import React, { createContext, useContext, useState } from "react";
import "react-native-gesture-handler";
import AppNavigation from "./src/navigation";
import "./ignoreWarnings";

interface IThemeContext {
  isScrolling: boolean;
  setIsScrolling?: (scrolling: boolean) => void;
}

const ThemeContext = createContext<IThemeContext>({
  isScrolling: false
});

export const useThemeContext = () =>  useContext(ThemeContext);

const App = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        isScrolling,
        setIsScrolling,
      }}
    >
      <AppNavigation />
    </ThemeContext.Provider>
  );
};

export default App;
