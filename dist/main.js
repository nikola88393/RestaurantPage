(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,":root {\n    --primary: #0A174E;\n    --secondary: #F5D042;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n    background-color: var(--secondary);\n    color: var(--secondary);\n    overflow-x: hidden;\n}\n\nimg {\n    width: clamp(100px, 80%, 700px);\n\n}\n\nheader,\nfooter,\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--primary);\n}\n\nheader {\n    padding: 20px;\n    gap: 10px;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\nfooter {\n    height: 60px;\n    width: 100%;\n    margin-top: auto;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-width: 80%;\n    border-radius: 20px;\n    padding: 30px;\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 20px;\n    padding: 20px;\n}\n\n.menuCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    background-color: var(--secondary);\n    color: var(--primary);\n    border-radius: 15px;\n\n}\n\nbutton {\n    background-color: var(--secondary);\n    color: var(--primary);\n    width: 100px;\n    height: 30px;\n    border: none;\n    border-radius: 10px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kCAAkC;IAClC,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;;AAEnC;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,kCAAkC;IAClC,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB",sourcesContent:[":root {\n    --primary: #0A174E;\n    --secondary: #F5D042;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n    background-color: var(--secondary);\n    color: var(--secondary);\n    overflow-x: hidden;\n}\n\nimg {\n    width: clamp(100px, 80%, 700px);\n\n}\n\nheader,\nfooter,\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--primary);\n}\n\nheader {\n    padding: 20px;\n    gap: 10px;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\nfooter {\n    height: 60px;\n    width: 100%;\n    margin-top: auto;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-width: 80%;\n    border-radius: 20px;\n    padding: 30px;\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 20px;\n    padding: 20px;\n}\n\n.menuCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    background-color: var(--secondary);\n    color: var(--primary);\n    border-radius: 15px;\n\n}\n\nbutton {\n    background-color: var(--secondary);\n    color: var(--primary);\n    width: 100px;\n    height: 30px;\n    border: none;\n    border-radius: 10px;\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,A="".concat(s," ").concat(l);o[s]=l+1;var p=t(A),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=a(u,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:m,references:1})}i.push(A)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var d=r(n,a),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),A=t(589),p=t.n(A),u=t(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const f=function(){let n=document.getElementById("content"),e=document.createElement("h1");e.innerHTML="Restaurant name blah blah",n.appendChild(e);let t=document.createElement("img");t.src="../src/assets/homeImg.jpg",n.appendChild(t);for(let e=0;e<3;e++){let e=document.createElement("p");e.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum fuga voluptatum tempore dicta tempora perspiciatis eligendi quasi ullam optio.Autem aut dolore ab esse consequatur quia eligendi molestiae laborum!",n.appendChild(e)}};f(),document.querySelectorAll("header button").forEach((n=>{n.addEventListener("click",(()=>{document.getElementById("content").innerHTML="","Home"===n.innerHTML?f():"Menu"===n.innerHTML?function(){let n=document.getElementById("content"),e=document.createElement("h1");e.innerHTML="Our menu",n.appendChild(e);let t=document.createElement("div");t.classList.add("gridContainer");for(let n=0;n<5;n++){let n=document.createElement("div");n.classList.add("menuCard");let e=document.createElement("h3");e.innerHTML="Tasty food",n.appendChild(e);let r=document.createElement("img");r.src=r.src="../src/assets/homeImg.jpg",n.appendChild(r);let a=document.createElement("p");a.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum fuga voluptatum tempore dicta tempora perspiciatis eligendi quasi ullam optio.Autem aut dolore ab esse consequatur quia eligendi molestiae laborum!",n.appendChild(a),t.appendChild(n)}n.appendChild(t)}():"Contacts"===n.innerHTML&&function(){let n=document.getElementById("content"),e=document.createElement("h1");e.innerHTML="Contacts information",n.appendChild(e);let t=document.createElement("img");t.src="../src/assets/homeImg.jpg",n.appendChild(t);let r=document.createElement("h3");r.innerHTML="Phone: XXXXXXXXXX",n.appendChild(r);let a=document.createElement("h3");a.innerHTML="Emial: XXXXXXXX@XXX.XX",n.appendChild(a);let o=document.createElement("button");o.innerHTML="Reserve table",n.appendChild(o)}()}))}))})()})();
//# sourceMappingURL=main.js.map