import React from "react";
import { FaDownload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cv from "../../assets/CV-Développeur-WEB-08-24.pdf";
import "./About.css";
import Info from "./Info";
import Services from "./Services";
import Skills from "./Skills";
import Cursus from "./Cursus";

const About = () => {
  return (
    <>
      <main className="section container">
        <section className="about">
          <h2 className="section__title">
            Sur <span className="section__title-span">Moi</span>
          </h2>
          <div className="about__container grid">
            <div className="about__info">
              <h3 className="section__subtitle"> Informations personnelles </h3>
              <ul className="info__list grid">
                <Info />
              </ul>
              <a className="button" href={Cv} download="Cv" target="_blank">
                Télécharger Mon Cv{" "}
                <span className="button__icon">
                  {" "}
                  <FaDownload />
                  <FontAwesomeIcon icon="fa-sharp fa-light fa-house" />
                </span>
              </a>
            </div>
          </div>
          <div className="separator"></div>

          <div className="services grid">
            <h3 className="section__subtitle">Mes Services</h3>
            <ul className="services__info grid">
              <Services />
            </ul>
          </div>
        </section>
        <div className="separator"></div>

        <section className="skills">
          <h3 className="section__subtitle subtitle__center">
            Mes Compétences{" "}
          </h3>
          <div className="skills__container grid">
            <Skills />
          </div>
        </section>
        <div className="separator"></div>
        <Cursus />
      </main>
    </>
  );
};

export default About;
