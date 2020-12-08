import React, { useState } from "react";
import "../../assets/css/teacher.css";
import { Redirect, withRouter } from "react-router";
import { Select, Input } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

function AcrossTheRiver() {
  const [valueQuestion, setValueQuestion] = useState(5);
  const [titleQuestion, setTitleQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [dataQuestion, setDataQuestion] = useState([]);

  const saveData = (id) => {
    setDataQuestion(
      [
        {
          id,
          titleQuestion,
          answer1,
          answer2,
          answer3,
          answer4,
        },
      ].concat(dataQuestion)
    );
  };
  return (
    <>
      <div className="body-the-river"></div>
      <div className="river-main">
        <div className="select">
          Số câu hỏi :{" "}
          <Select
            style={{ width: 70 }}
            onChange={(e) => {
              setValueQuestion(e);
            }}
            value={valueQuestion}
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={15}>15</Option>
          </Select>
        </div>
        <div className="question">
          <span>Câu 1: </span>
          <div className="titleText">
            <TextArea
              rows={4}
              placeholder="Nhập câu hỏi..."
              onChange={(e) => setTitleQuestion(e.target.value)}
              value={titleQuestion}
            />
          </div>
          <div className="answer">
            <div className="row1">
              <Input
                placeholder="Đáp án đúng..."
                size="large"
                prefix={<CheckOutlined style={{ color: "green" }} />}
                onChange={(e) => {
                  setAnswer1(e.target.value);
                }}
                value={answer1}
              />
              <Input
                placeholder="Đáp án sai..."
                size="large"
                prefix={<CloseOutlined style={{ color: "red" }} />}
                onChange={(e) => {
                  setAnswer2(e.target.value);
                }}
                value={answer2}
              />
            </div>
            <div className="row2">
              <Input
                placeholder="Đáp án sai..."
                size="large"
                prefix={<CloseOutlined style={{ color: "red" }} />}
                onChange={(e) => {
                  setAnswer3(e.target.value);
                }}
                value={answer3}
              />
              <Input
                placeholder="Đáp án sai..."
                size="large"
                prefix={<CloseOutlined style={{ color: "red" }} />}
                onChange={(e) => {
                  setAnswer4(e.target.value);
                }}
                value={answer4}
              />
            </div>
          </div>
          <button onClick={() => saveData(1)}>Lưu</button>
        </div>
      </div>
    </>
  );
}

export default withRouter(AcrossTheRiver);
