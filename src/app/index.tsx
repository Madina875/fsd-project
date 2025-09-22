import { memo } from "react";
import AppRouter from "./routes/index";
import AppProvider from "./provider/index";

const App = () => {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
};

export default memo(App);
