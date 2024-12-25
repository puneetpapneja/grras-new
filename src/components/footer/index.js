import React from 'react';
import Styles from './styles';
import PropTypes from 'prop-types';

const Footer = React.memo(({ ismobile }) => {
  return <Styles.sFooter isMobile={ismobile}> Contact: sandip.sarkar3@ibm.com</Styles.sFooter>;
});

Footer.propTypes = {
  ismobile: PropTypes.bool
};

Footer.displayName = 'Footer';
export default Footer;
