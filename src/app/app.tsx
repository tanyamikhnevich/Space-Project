import React, { useEffect } from "react";

import { Routing } from "features/routing/routing";
import { api } from "../shared/api/api";
import { privateRoutes, publicRoutes } from "features/routing/router";
import {
  useAppDispatch,
  useAppSelector,
} from "features/hooks/use-app-dispatch";
import { setup } from "entites/auth/state/slice";

import styles from "./app.module.scss";
import "./styles/index.scss";

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
        {user ? (
          <Routing routes={privateRoutes} />
        ) : (
          <Routing routes={publicRoutes} />
        )}
      </div>
    </div>
  );
};
