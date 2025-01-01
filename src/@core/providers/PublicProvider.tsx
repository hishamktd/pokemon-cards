import React, { FC, memo } from "react";
import ThemeProvider from "./components/ThemeProvider";
import AppBar from "@core/layout/app-bar";

type Props = {
  children: React.ReactNode;
};

const PublicProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <AppBar />
      {children}
    </ThemeProvider>
  );
};

export default memo(PublicProvider);
