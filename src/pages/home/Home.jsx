import profile from "../../assets/profile.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home section grid">
      <img className="home__img" src={profile} alt="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="">
              Je suis Yacine Taleb .<br />
            </span>{" "}
            Dévloppeur web
          </h1>
          <p className="home__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo
            asperiores, totam laborum nemo at, nesciunt deleniti cum voluptate
            incidunt vitae tenetur tempora saepe ex molestiae pariatur sed, hic
            numquam.
          </p>
          <Link to="About" className="button">
            Lire plus sur Moi
            <span className="button__icon">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
