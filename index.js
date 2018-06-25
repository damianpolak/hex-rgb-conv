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
// Usage: hexRgbConv(hex)
// hex arg: hex value 3 or 6 digit notation
module.exports = hexRgbConv = (hex) => {
   'use strict';

   hex = hex.toString(16);
   let hexCheck = (val) => {
     return (/^[0-9a-fA-F]+$/).test(val);
   }

   if(hex === undefined) {
     throw new TypeError('Expected correct hex value in three or six digit notation');
   } else {
     if(hex[0] === '#') {
       var hex = hex.slice(1, hex.length);
     }

     if(parseInt(hex, 16) < 0xFFFFFF && hexCheck(hex) == true) {
       switch(hex.length) {
         // Turns 3 digits notation hex code to RGB values.
         // IMPORTANT! This is a rounded number that never will
         // be the same as for a 6 digits conversion
         case 3:
         return { red: parseInt(parseInt(hex[0], 16) * 17, 10) ,
                  green: parseInt(parseInt(hex[1], 16) * 17, 10),
                  blue: parseInt(parseInt(hex[2], 16) * 17, 10)};
         break;

         // Turns 6 digits notation hex code to RGB values.
         case 6:
         return { red: parseInt(parseInt(hex[0]+hex[1], 16), 10) ,
                  green: parseInt(parseInt(hex[2]+hex[3], 16), 10),
                  blue: parseInt(parseInt(hex[4]+hex[5], 16), 10)};
         break;

         // Complements gaps in hex code with 0 (to max 6 digits notation)
         default:
          for(let i = hex.length; i <= 5; i++) {
            hex += '0';
          }
          return { red: parseInt(parseInt(hex[0]+hex[1], 16), 10) ,
                   green: parseInt(parseInt(hex[2]+hex[3], 16), 10),
                   blue: parseInt(parseInt(hex[4]+hex[5], 16), 10)};
       }
     } else {
       throw new TypeError('Expected correct hex value in three or six digit notation');
     }
   }
 };

console.log(hexRgbConv('#12'));
