import { createContext, useContext, useState } from "react";

type Scenes = "videos"

type AppContextTypes = {
  activeScene: Scenes | null;
  updateScene: (value: Scenes | null) => void;
}

type AppProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<AppContextTypes | null>(null);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeScene, setActiveScene] = useState<Scenes | null>(null);

  const updateScene = (value: Scenes | null) => {
    setActiveScene(value);
  };

  return (
    <AppContext.Provider value={{ updateScene, activeScene }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error ("useApp must be within AppProvider");
  return ctx;
};

