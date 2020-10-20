import React from "react";
import Loadable from "react-loadable";

function Loading(props) {
  return <div className="vnt-loading"></div>;
}

const DangNhap = Loadable({
  loader: () => import("./components/dangnhap/trangchu"),
  loading: Loading,
});

const GiaoVien = Loadable({
  loader: () => import("./components/giaovien/trangchu"),
  loading: Loading,
});

export const appRoutes = [
  {
    path: "/",
    component: DangNhap,
  },
  {
    path: "/GiaoVien",
    component: GiaoVien,
  },
];
