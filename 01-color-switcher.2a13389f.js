!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n.style.background=d(),a=setInterval((function(){n.style.background=d()}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(a)})),e.disabled=!0;var a=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.2a13389f.js.map
