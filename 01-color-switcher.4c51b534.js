!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},a=null;function s(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.start.addEventListener("click",(function(){a=setInterval(s,1e3),t.start.classList.add("disabled"),t.stop.classList.remove("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(a),t.start.classList.remove("disabled"),t.stop.classList.add("disabled")}))}();
//# sourceMappingURL=01-color-switcher.4c51b534.js.map
