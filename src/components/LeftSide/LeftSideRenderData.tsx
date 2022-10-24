import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "./LeftSideRenderData.scss"

interface ILeftSideRenderDataType {
  title: string;
  list: JSX.Element | JSX.Element[];
  icon: string;
}

const LeftSideRenderData = ({ title, list, icon }: ILeftSideRenderDataType) => {
  return (
    <section className="renderData">
      <h3>
        <img className="renderData__img" src={icon} />
        {title}
      </h3>

      <ul>{list}</ul>
    </section>
  );
};

export default LeftSideRenderData;
