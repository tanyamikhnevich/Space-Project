import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { PopupContext } from "./popup-context";

import classNames from "classnames";
import styles from "./popup.module.scss";

interface Props {
  children: ReactNode;
}

const modalRootElement = document.querySelector("#modal");

export const PopupProvider = ({ children }: Props) => {
  const [component, setComponent] = useState<JSX.Element | boolean>(false);

  const openPopup = (component: JSX.Element) => {
    setComponent(component);
  };

  const closePopup = () => {
    setComponent(false);
  };

  const contextValue = useMemo(() => ({ openPopup, closePopup }), [component]);

  const [element] = useState(() => document.createElement("div"));

  useEffect(() => {
    if (!modalRootElement) return;
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  }, []);

  return (
    <PopupContext.Provider value={contextValue}>
      {component &&
        createPortal(
          <div className={styles.popupC}>
            <div className={classNames(component && styles.container)}>
              {component && (
                <div className={styles.popup}>
                  <button className={styles.close} onClick={closePopup}>
                    <div className={styles.cross} />
                  </button>
                  {component}
                </div>
              )}
            </div>
          </div>,
          element
        )}
      {children}
    </PopupContext.Provider>
  );
};
