import labels from "../../labels";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1>{labels.header.firstName}</h1>
        <h1>{labels.header.secondName}</h1>
      </div>
      <div className="header__right">
        <h1 className="header__right-title">{labels.header.title}</h1>
      </div>
    </header>
  );
};

export default Header;
