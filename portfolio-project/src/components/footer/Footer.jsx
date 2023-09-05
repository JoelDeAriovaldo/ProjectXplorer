import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ariovaldo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#portifolio" className="footer__link">Projetos</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/sir_cunhalaa/" className="home__social-icon" target='blank'>
                <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100087990708945" className="home__social-icon" target='blank'>
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://twitter.com/JoelDeAriovaldo" className="home__social-icon" target='blank'>
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Joel De Ariovaldo. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
