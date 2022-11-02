import React from "react";
import "./LeftSideRenderData.scss"

interface ILeftSideRenderDataType {
  title: string;
  list: JSX.Element | JSX.Element[];
}

const LeftSideRenderData = ({ title, list}: ILeftSideRenderDataType) => {
  return (
    <section className="renderData">
      <h3>
        {title}
      </h3>
      <ul>{list}</ul>
    </section>
  );
};

export default LeftSideRenderData;
