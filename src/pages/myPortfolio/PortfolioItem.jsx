import { useState } from "react";
import Close from "../../assets/close.svg";
const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevToggle) => !prevToggle);
  };
  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc, href }, index) => {
                return (
                  <li key={index} className="modal__item">
                    <span className="item__icon">{icon}</span>
                    <div>
                      <a href={href} className="item__title">
                        {title}
                      </a>
                      <a href={href} className="item__details">
                        {desc}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
