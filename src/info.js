import React from "react";

function Info(props) {
  return (
    <div
      className=""
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <p style={{ color: "#61dafb" }}>I am {props.Name}</p>
      <p style={{ color: "#1da362" }}>
        I am currently a {props.Job} and I am {props.height}
      </p>
    </div>
  );
}
export default Info;
