import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import styles from "./app.module.scss";
import { privateRoutes, publicRoutes } from "../features/routing/router";
import { useAppDispatch, useAppSelector } from "features/hooks/hooks";
import { setup } from "../store/auth/auth-slice";
import { api } from "../shared/api/api";

export const App = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(setup(JSON.parse(user)));
    }
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Routes>
          {!user
            ? publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                />
              ))
            : privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                />
              ))}
        </Routes>
      </div>
    </div>
  );
};
