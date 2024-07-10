import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const notify = () =>
    toast.success(" Message envoyé!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    subject: "",
    message: "",
    username: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, subject, message } = formData;
    if (!from_name || !subject || !message) {
      window.alert("Veuillez remplir tous les champs.");
    } else {
      emailjs
        .sendForm("service_c39znz8", "template_uhm038a", form.current, {
          publicKey: "1KGUhfLlMS1E8SmGG",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setFormData({
              subject: "",
              from_name: "",
              message: "",
              username: "",
            });
            notify();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Contactez<span className="section__title-span">-Moi</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Discutons ensemble</h3>
          <p className="contact__description">
            Je suis toujours ouvert à de nouvelles opportunités et
            collaborations intéressantes. Si vous avez une question, un projet
            ou simplement envie de discuter, n&apos;hésitez pas à me contacter
            via le formulaire de contact ci-dessous.
            <br /> Je ferai de mon mieux pour répondre dans les plus brefs
            délais.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Contactez-moi </span>
                <h4 className="info__desc">yacinetaleb995@gmail.com </h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Appellez-moi </span>
                <h4 className="info__desc"> +07 50 53 53 47</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="www.facbook.com">
              <FaFacebookF className="contact__social-link" />
            </a>
            <a href="">
              <FaTwitter className="contact__social-link" />
            </a>
            <a href="">
              <FaYoutube className="contact__social-link" />
            </a>
            <a href="">
              <FaDribbble className="contact__social-link" />
            </a>
          </div>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Nom"
                className="form__control"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Email"
                className="form__control"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Sujet"
                className="form__control"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Votre Message"
              className="form__control textarea"
              id=""
              cols="30"
              rows="2"
              name="message"
              onChange={handleChange}
              value={formData.message}
            />{" "}
          </div>
          <button className="btn__message button" type="submit" value="Send">
            Send Message
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce
            ></ToastContainer>
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
