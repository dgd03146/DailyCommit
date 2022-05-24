import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph Running");
  return <p>{props.children}</p>;
};

export default MyParagraph;
