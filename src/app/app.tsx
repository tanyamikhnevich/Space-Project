import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import styles from "./app.module.scss";
import { privateRoutes, publicRoutes } from "../features/routing/router";
import { useAppDispatch, useAppSelector } from "features/hooks/hooks";
import { setup } from "../store/auth/auth-slice";
import { api } from "../shared/api/api";
import { Routing } from "../features/routing/routing";

export const App = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  //когда логаут нужно отчистить стейт и локалсторадж(загуглить)

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
        {user ? (
          <Routing routes={privateRoutes} />
        ) : (
          <Routing routes={publicRoutes} />
        )}
      </div>
    </div>
  );
};
