import '../styles/index.scss';

import PropTypes from 'prop-types';

function Footer({ isFooterSticky }) {
  return (
    <>
      <div className="footer" style={{ position: isFooterSticky ? 'fixed' : 'static', bottom: isFooterSticky ? '0' : 'auto' }}>
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

Footer.propTypes = {
  isFooterSticky: PropTypes.bool.isRequired,
}

export default Footer;
