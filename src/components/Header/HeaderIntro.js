import React from "react";
import parse from "html-react-parser";

export const HeaderIntro = ({ title, txt }) => {
  return (
    <>
      <h2>{title}</h2>
      {parse(txt)}
    </>
  );
};
