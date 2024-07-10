import React from "react";
import { services } from "../../data";
import parse from "html-react-parser";

const Services = () => {
  const myServices = services.map(({ description, title }, index) => {
    return (
      <div className="services__box" key={index}>
        <h2 className="services__title">{parse(title)}</h2>
        <div className="services __desc">{parse(description)}</div>
      </div>
    );
  });
  return <>{myServices}</>;
};

export default Services;
