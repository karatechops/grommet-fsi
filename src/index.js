// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import './lib/modernizr';

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

// Mobile browser is detected to remove height below browser nav.
// This removes the vertical scroll bar to maintain the horizontal experience.
// If overflow is set to hidden progress detection is disabled.
function _isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Conditional for IE to assist with SVG inconsistencies.
function _isIe11() {
  return (!!window.MSInputMethodContext && !!document.documentMode);
}

import routes from './js/routes';
import ReactDOM from 'react-dom';

const element = document.getElementById('content');
ReactDOM.render(routes, element);

document.body.classList.remove('loading');
if (_isMobileDevice()) document.body.classList.add('mobile');
if (_isIe11()) document.body.classList.add('ie11');
