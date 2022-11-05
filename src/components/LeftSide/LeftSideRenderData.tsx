import "./LeftSideRenderData.scss"

interface ILeftSideRenderDataType {
  title: string;
  list: JSX.Element | JSX.Element[];
}

const LeftSideRenderData = ({ title, list }: ILeftSideRenderDataType) => {
  return (
    <section className="renderData">
      <h3 className="renderData__title">
        {title}
      </h3>
      <ul>{list}</ul>
    </section>
  );
};

export default LeftSideRenderData;
