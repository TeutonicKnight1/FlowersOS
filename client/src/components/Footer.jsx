import '../styles/index.scss';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__copyright">
          <p className="footer__copyright-p">© 2023 ЧЁРНАЯ & РОЗА</p>
        </div>
        <div className="footer__contacts">
          <p className="footer__contacts-p">
            Контакты: +7 (999) 999-99-99
          </p>
        </div>
        <div className="footer__social">
          <p className="footer__social-p">Социальные сети</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
