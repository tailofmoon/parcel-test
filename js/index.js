import $ from 'jquery';
import header from "./header.js";
console.log('hello parcel');
console.log(header);

let _header = document.getElementById('header');
_header.innerHTML = header;

$(function(){
  $('header').css('color', 'red');
});