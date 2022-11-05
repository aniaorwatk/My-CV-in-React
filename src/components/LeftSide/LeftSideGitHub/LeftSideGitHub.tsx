import { gitHub } from "../LeftSideHandler";
import "./LeftSideGitHub.scss";

const LeftSideGitHub = () => {
  return (
    <div className="gitHub">
      <a href="https://github.com/aniaorwatk" >
        <h3>{gitHub.page}</h3>
        <h3>{gitHub.name}</h3>
      </a>
    </div>
  );
};

export default LeftSideGitHub;
