import React from "react";
import {render} from "react-dom";
// this line is new
// we now have some nice styles on our react app
import "index.scss";

let HelloWorld = () => {
  return <h1>Hello there World!</h1>
}

render(
  <HelloWorld/>,
  document.getElementById("root")
);