!function(){var t={onBtnStart:document.querySelector("[data-start]"),onBodyColor:document.querySelector("body"),onBtnStop:document.querySelector("[data-stop]")};t.onBodyColor.style="height: 100vh",t.onBodyColor.style.background="linear-gradient(to bottom, blue 50%, yellow 50%)";var o=null;t.onBtnStart.addEventListener("click",(function(){o=setInterval((function(){t.onBodyColor.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.onBtnStart.disabled=!0,t.onBtnStop.disabled=!1})),t.onBtnStop.addEventListener("click",(function(){t.onBtnStart.disabled=!1,t.onBtnStop.disabled=!0,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.0696b8e5.js.map