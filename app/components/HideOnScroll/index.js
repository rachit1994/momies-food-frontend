import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const HideOnScroll = ({ children, window, slideProps={ appear: false, direction: 'down' } }) => {
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        threshold: 0,
        disableHysteresis: true
      });
  
    return (
            React.cloneElement(children, {
                elevation: trigger ? 4 : 0,
            })
    );
  }
  
HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HideOnScroll;
