import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = (() => {
  return (
    <div className="site-footer">
      <div className="footer_about">
        <Link to="/login" className="title">We Plants</Link>
        <Link to="#" className="aboutUs">About Us</Link>
      </div>
      <div className="footer_icons">
        <p className="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by Martin & Niv
      </p>
        <ul className="social-icons">
          <li>
            <Link className="facebook" to="#"><FacebookIcon/><i className="fa fa-facebook"></i></Link>
          </li>
          <li>
            <Link className="twitter" to="#"><TwitterIcon/><i className="fa fa-twitter"></i></Link>
          </li>
          <li>
            <Link className="linkedin" to="#"><LinkedInIcon/><i className="fa fa-linkedin"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  )

});
export default Footer;