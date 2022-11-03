import React from "react";
import Users from "./examples";
import Info from "./info";

function Add() {
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ color: "green" }}></h1>
      {Users.map((e) => {
        return <Info Name={e.Name} height={e.Height} Job={e.Job} />;
      })}
    </div>
  );
}
export default Add;
