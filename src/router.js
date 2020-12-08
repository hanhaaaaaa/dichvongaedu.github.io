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

const Exam = Loadable({
  loader: () => import("./components/teacher/exam"),
  loading: Loading,
});

const AcrossTheRiver = Loadable({
  loader: () => import("./components/teacher/acrossTheRiver"),
  loading: Loading,
});


export const appRoutes = [
  {
    path: "/",
    name:"login",
    component: Login,
    exact: true,
  },
  {
    path: "/teacher",
    name:"teacher",
    component: Teacher,
    exact: true,
  },
  {
    path: "/teacher/exam",
    name:"exam",
    component: Exam,
    exact: true,
  },
  {
    path: "/teacher/exam/acrossTheRiver",
    name:"exam",
    component: AcrossTheRiver,
    exact: true,
  },
];
