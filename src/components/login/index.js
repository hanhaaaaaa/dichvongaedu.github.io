import React, { useState, useEffect } from "react";
import "../../assets/css/login.css";
import { Input, message } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { dataInfo } from "../../data";
import { Redirect, withRouter } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("dataInfo")) {
      localStorage.setItem("dataInfo", JSON.stringify(dataInfo));
    }
  });

  const login = () => {
    let dataInfo = JSON.parse(localStorage.getItem("dataInfo"));
    let checkUserByUsername = dataInfo.map((item) => {
      if (item.username === username) {
        return item;
      } else {
        return false;
      }
    });
    const user = checkUserByUsername.find((element) => element !== false);
    if (!user) {
      message.error("Tài khoản không tồn tại");
    }
    if (user.password !== password) {
      message.error("Sai mật khẩu");
    }
    if (user.password === password) {
      if (user.role === "admin" || user.role === "gv") {
        setRole("gv");
      } else {
        setRole("hs");
      }
      setRedirect(true);
    }
  };

  if (redirect) {
    if (role === "gv") {
      return (
        <Redirect
          to={{
            pathname: "/teacher",
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/student",
          }}
        />
      );
    }
  }

  return (
    <>
      <div className="all">
        <div className="form">
          <div className="layer"></div>
          <div className="main">
            <h1>Đăng nhập để bắt đầu</h1>
            <Input
              placeholder="Tên đăng nhập"
              prefix={<UserOutlined />}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <br />
            <Input
              type="password"
              prefix={<KeyOutlined />}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button onClick={login}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(Login);
