import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/index.scss";
import styles from "./app.module.scss";
import { publicRoutes } from "./router";

export const App = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </div>
    </div>
  );
};
