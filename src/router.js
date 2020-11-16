import React from "react";
import Loadable from "react-loadable";

function Loading(props) {
  return <div className="vnt-loading"></div>;
}

const Login = Loadable({
  loader: () => import("./components/login/index"),
  loading: Loading,
});

const Teacher = Loadable({
  loader: () => import("./components/teacher/index"),
  loading: Loading,
});

export const appRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/teacher",
    component: Teacher,
  },
];
