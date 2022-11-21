import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActions } from "entites/auth";
import { registerActions } from "entites/register";
import { yourSpacesActions } from "entites/spaces/yours";
import { recentSpacesActions } from "entites/spaces/recent";
import { additionalSpacesActions } from "entites/spaces/additional";
import { searchSpacesActions } from "entites/spaces/search";

const actionCreators = {
  ...authActions,
  ...registerActions,
  ...yourSpacesActions,
  ...recentSpacesActions,
  ...additionalSpacesActions,
  ...searchSpacesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return { ...bindActionCreators(actionCreators, dispatch) };
};
