!function(e){function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n){$(function(){$("#bs-example-navbar-collapse-1").on("shown.bs.collapse",function(){$("#navbar-hamburger").addClass("hidden"),$("#navbar-close").removeClass("hidden")}).on("hidden.bs.collapse",function(){$("#navbar-hamburger").removeClass("hidden"),$("#navbar-close").addClass("hidden")})}),$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&"dropdown-toggle"!=$(e.target).attr("class")&&$(this).collapse("hide")}),$(function(){$(document).click(function(e){$(".navbar-collapse").collapse("hide")})}),$(document).ready(function(){setTimeout(function(){$("#cookieConsent").fadeIn(200)},4e3),$("#closeCookieConsent, .cookieConsentOK").click(function(){$("#cookieConsent").fadeOut(200)})}),function(){for(var e=document.querySelectorAll(".youtube"),n=0;n<e.length;n++){var t="https://img.youtube.com/vi/"+e[n].dataset.embed+"/sddefault.jpg",o=new Image;o.src=t,o.addEventListener("load",void e[n].appendChild(o)),e[n].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}}(),$(document).ready(function(){$(".carousel").carousel({interval:1e4})})}]);