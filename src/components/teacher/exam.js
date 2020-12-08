import React, { useState } from "react";
import "../../assets/css/teacher.css";
import River from "../../assets/images/song.jpg";
import { Redirect, withRouter } from "react-router";

function Exam() {
  const [redirect, setRidirect] = useState(false);
  const [link, setLink] = useState("");

  const redirectPage = (linkPage) => {
    setLink(linkPage);
    setRidirect(true);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: link,
        }}
      />
    );
  }

  return (
    <div className="body-page-teacher">
      <div className="map">
        <div
          id="map-exam"
          onClick={() => redirectPage("/teacher/exam/acrossTheRiver")}
        >
          <img src={River} alt="song" className="img" />
          <p>Qua sông</p>
        </div>
        <div id="map-exam" onClick={() => redirectPage("/teacher/exam/test")}>
          <img src={River} alt="song" className="img" />
          <p>Đề thi trắc nghiệm</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Exam);
