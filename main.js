!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e){e.exports=JSON.parse('[{"issuer":"Diners Club - Carte Blanche","regex":"^30[0-5]\\\\d*","ln":14,"image":"diners-club"},{"issuer":"American Express","regex":"^34|37\\\\d*","ln":15,"image":"american-express"},{"issuer":"JCB","regex":"^((35[3-8][0-9]{1})|(352[8-9]))\\\\d*","ln":[16,19],"image":"jcb"},{"issuer":"Diners Club - International","regex":"^36\\\\d*","ln":14,"image":"diners-club"},{"issuer":"Visa","regex":"^4\\\\d*","ln":[13,16],"image":"visa"},{"issuer":"Visa Electron","regex":"^(4026|4508|4844|4913|4947|417500)\\\\d*","ln":16,"image":"visa_electron"},{"issuer":"Maestro","regex":"^(5018|5020|5038|5893|6304|6759|6761|6762|6763)\\\\d*","ln":[16,19],"image":"maestro"},{"issuer":"MasterCard","regex":"^((2720[0-9]{2})|(27[0-1][0-9]{3})|(2[3-6][0-9]{4})|(22[3-9][0-9]{3})|(222[1-9][0-9]{2})|(5[1-5]))\\\\d*","ln":16,"image":"mastercard"},{"issuer":"Diners Club - USA & Canada","regex":"^54\\\\d*","ln":16,"image":"diners-club"},{"issuer":"Discover","regex":"^((62292[0-5])|(6229[0-1][0-9]{1})|(622[2-8][0-9]{2})|(6221[3-9][0-9]{1})|(62212[6-9])|(64[4-9])|(6011)|(65))\\\\d*","ln":[16,19],"image":"discover"},{"issuer":"InstaPayment","regex":"^63[7-9]\\\\d*","ln":16,"image":"instapay"},{"issuer":"МИР","regex":"^2\\\\d*","ln":16,"image":"mir"}]')},function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var a=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cards=n}var n,t,a;return n=e,(t=[{key:"checkLength",value:function(e){return"object"===r(e)?e.includes(this.input.length):this.input.length===e}},{key:"check",value:function(e){var n=this;this.input=e;var t=[];return this.cards.forEach((function(r){var i=new RegExp(r.regex),a=r.ln;i.exec(e)&&(n.input.length<13||n.checkLength(a))&&t.push(r)})),t}}])&&i(n.prototype,t),a&&i(n,a),e}();function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.sum=0,this.nDigits=0,this.parity=0}var n,t,r;return n=e,(t=[{key:"check",value:function(e){this.nDigits=e.length,this.sum=parseInt(e[this.nDigits-1],10),this.parity=this.nDigits%2;for(var n=0;n<=this.nDigits-2;n+=1){var t=parseInt(e[n],10);n%2===this.parity&&(t*=2),t>9&&(t-=9),this.sum+=t}return this.sum%10==0?"pass":"fail"}}])&&c(n.prototype,t),r&&c(n,r),e}(),s=t.p+"fa1e925b5103d864a07f59ae1d5f3c47.png",u=t.p+"126e385afd305c6912ef6dca3f3fc119.png",l=t.p+"91be95a0595c5d958b1087ada3fbe497.png",d=t.p+"8bc7e34a11d3ae8d914f9437603228e7.png",f=t.p+"b1babc9e1e91140aaedc24dc2eb034cf.png",m=t.p+"7ecd507a7b579cf55d48dd4d160d9714.png",g=t.p+"652700939c37c6218e5735470eac7a07.png",p=t.p+"6b08ca8ff6cd28df36e125bcc26c7897.png",b=t.p+"7fd5d1149dd86e92037d792c471a6572.png",h=t.p+"fa86608c02ad4972f744025068f3ab84.png";function v(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cards=n,this.images={"diners-club":s,"american-express":u,jcb:l,visa:d,visa_electron:f,maestro:m,mastercard:g,discover:p,instapay:b,mir:h}}var n,t,r;return n=e,(t=[{key:"drawform",value:function(){var e=this,n=document.createElement("div");n.id="container",document.body.appendChild(n);var t=document.createElement("div");t.id="logos",n.appendChild(t),this.cards.forEach((function(n){if(!document.getElementById("".concat(n.image))){var r=document.createElement("img");r.id=n.image;var i=e.images[n.image];r.src=i,r.alt=n.issuer,t.insertAdjacentElement("beforeend",r)}}));var r=document.createElement("form");r.id="form",n.insertAdjacentElement("beforeend",r),r.onsubmit=function(e){return e.preventDefault()};var i=document.createElement("input");i.id="input",r.insertAdjacentElement("beforeend",i);var a=document.createElement("button");a.onClick=function(e){return e.preventDefault()},a.id="validate_button",a.innerHTML="TEST",r.insertAdjacentElement("beforeend",a)}}])&&v(n.prototype,t),r&&v(n,r),e}(),E=t(0);function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.issuerChecker=new a(E),this.uiMaker=new y(E),this.checksumChecker=new o,this.suggested=[],this.cards=E}var n,t,r;return n=e,(t=[{key:"init",value:function(){var e=this;this.uiMaker.drawform(),document.getElementById("input").addEventListener("keyup",(function(){var n=document.getElementById("input").value;e.suggested=e.issuerChecker.check(n),e.cards.forEach((function(n){var t=document.getElementById("".concat(n.image));t.classList.remove("bright"),e.suggested.includes(n)&&t.classList.add("bright")}))})),document.getElementById("validate_button").onclick=function(){var n=document.getElementById("input").value,t=document.getElementsByClassName("card");t.length&&Array.from(t).forEach((function(e){e.remove()})),e.suggested.length&&e.suggested.forEach((function(t){var r=document.createElement("div");r.className="card",r.innerHTML="Issuer: ".concat(t.issuer," - Checksum test: ").concat(e.checksumChecker.check(n)),document.getElementById("container").insertAdjacentElement("beforeend",r)}))}}}])&&k(n.prototype,t),r&&k(n,r),e}())).init()}]);