import { skills } from "../../data";

import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
const Skills = () => {
  const mySkills = skills.map(({ title, percentage, icon }, index) => {
    return (
      <div className="progress__box" key={index}>
        <div className="progress__circle">
          <CircularProgressbarWithChildren
            styles={buildStyles({
              pathColor: "#8a2ce2", // Couleur de la bordure
            })}
            strokeWidth={7}
            value={percentage}
          >
            {icon},
            <div>
              <strong className="percentage">{percentage}%</strong> <br />
            </div>
          </CircularProgressbarWithChildren>
          <h3 className="skill__title">{title}</h3>
        </div>
      </div>
    );
  });
  return <>{mySkills}</>;
};

export default Skills;
