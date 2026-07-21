import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  }, []);

  return (
    <AppContext.Provider value={{ toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
