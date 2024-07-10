import { personalInfo } from "../../data";

const Info = () => {
  const infos = personalInfo.map(({ title, description }, index) => {
    return (
      <li key={index}>
        <span className="info__item">{title}</span>
        <span className="info__description">{description}</span>
      </li>
    );
  });
  return <>{infos}</>;
};

export default Info;
