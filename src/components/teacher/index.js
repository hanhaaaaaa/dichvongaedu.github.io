import React from "react";
import "../../assets/css/teacher.css";
import { Link, withRouter } from "react-router-dom";

function Teacher() {
  return (
    <div className="body-page-teacher">
      <div className="list-btn">
        <Link to="/teacher/exam">
          <button style={{ background: "red" }}>Xem điểm thi</button>
        </Link>
        <Link to="/teacher/exam">
          <button style={{ background: "#28A745" }}>Tạo đề thi</button>
        </Link>
        <Link to="/teacher/exam">
          <button style={{ background: "#17A2B8" }}>Đề thi đã tạo</button>
        </Link>
        <Link to="/teacher/exam">
          <button style={{ background: "#FFC107" }}>Quản lí tài khoản</button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Teacher);
