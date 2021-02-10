import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (() => {
  return (
    <div className="site-footer">
      <div className="footer_about">
        <Link to="#" className="title">We Plants</Link>
        <Link to="#" className="aboutUs">About Us</Link>
      </div>
      <div className="footer_icons">
        <p className="copyright-text">
          Copyright &copy; 2020 All Rights Reserved by Martin & Niv
      </p>
        <ul className="social-icons">
          <li>
            <Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link>
          </li>
          <li>
            <Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link>
          </li>
          <li>
            <Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link>
          </li>
          <li>
            <Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link>
          </li>
        </ul>
      </div>
    </div>

  )

});
export default Footer;