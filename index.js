/*
 * hex-rgb-conv
 * https://github.com/damianpolak/hex-rgb-conv
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

// Convert 6 digits and 3 digits hex color codes to RGB values.
// Usage: hexRgbConv('#123')
//    OR
// Usage: hexRgbConv('#123', true)
// hex param   | type string: hex value 3 or 6 digit notation
// array param | type boolean: true or false for return value in array or object

module.exports = hexRgbConv = (hex, array) => {
  'use strict';

  let hexCheck = (val) => {
  return (/^[0-9a-fA-F]+$/).test(val);
  }

  const message = 'Expected correct hex value in three or six digit notation';

  hex = hex.toString(16);

  if(hex === undefined) {
   throw new TypeError(message);
  } else {
   if(hex[0] === '#') {
     var hex = hex.slice(1, hex.length);
   }

   if(parseInt(hex, 16) <= 0xFFFFFF && hexCheck(hex) === true) {
     switch(hex.length) {
       // Turns 3 digits notation hex code to RGB values.
       // IMPORTANT! This is a rounded number that never will
       // be the same as for a 6 digits conversion
       case 3:
        var red = parseInt(parseInt(hex[0], 16) * 17, 10);
        var green = parseInt(parseInt(hex[1], 16) * 17, 10);
        var blue = parseInt(parseInt(hex[2], 16) * 17, 10);
       break;

       // Turns 6 digits notation hex code to RGB values.
       case 6:
        var red = parseInt(parseInt(hex[0]+hex[1], 16), 10);
        var green = parseInt(parseInt(hex[2]+hex[3], 16), 10);
        var blue = parseInt(parseInt(hex[4]+hex[5], 16), 10);
       break;

       default:
        throw new TypeError(message);
     }

     return array === true ?
   		[red, green, blue] :
   		{red, green, blue};

   } else {
      throw new TypeError(message);
   }
  }
};
