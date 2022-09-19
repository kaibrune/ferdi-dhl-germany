"use strict";

const path = require('path');
module.exports = (Ferdi) => {  
  Ferdi.injectCSS(path.join(__dirname, 'style.css'));
}