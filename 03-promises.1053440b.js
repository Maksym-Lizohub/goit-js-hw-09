var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=e.target;let n=Number(t.delay.value);const o=Number(t.step.value),l=Number(t.amount.value);for(let e=1;e<=l;e+=1)i(e,n).then((({i:e,delay:t})=>{r.Notify.success(`Fulfilled promise ${e} in ${t}ms`)}),n).catch((({i:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.1053440b.js.map