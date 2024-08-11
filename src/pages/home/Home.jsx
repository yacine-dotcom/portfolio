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
            Développeur web
          </h1>
          <p className="home__description">
            Je m'appelle Yacine Taleb, diplômé en Master 2 Conception et
            Intégration Multimédia à l'Université Lumière Lyon 2. Après une
            période de 6 mois de réflexion professionnelle, Je suis actuellement
            à la recherche d'une nouvelle opportunité en développement web.
            Passionné par les technologies web, je suis prêt à apporter mes
            compétences et mon enthousiasme à votre équipe. Je suis ouvert à
            toutes les opportunités et serais ravi d'échanger avec vous sur des
            projets passionnants. N'hésitez pas à me contacter
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
