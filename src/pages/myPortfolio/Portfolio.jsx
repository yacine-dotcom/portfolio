import PortfolioItem from "./PortfolioItem";
import { portfolio } from "../../data";
import { FaGithub } from "react-icons/fa";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio section">
        <h2 className="section__title">
          {" "}
          Mon <span className="section__title-span">Portfolio </span>
        </h2>
        <div className="portfolio__container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem {...item} key={item.id} />;
          })}
        </div>
      </section>
      <div className="container">
        <h1>
          Et Autres sur mon Github {"        "}
          <a href="https://github.com/yacine-dotcom">
            {"        "}
            <FaGithub
              className="back"
              style={{
                width: "50px",
                height: "30px",
                padding: "2px",
                border: "1px solid",
                marginLeft: "10px",
              }}
            />
          </a>
        </h1>
      </div>
    </>
  );
};

export default Portfolio;
