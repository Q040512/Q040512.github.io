(()=>{var c={key:null};window.reCaptchaLabel=document.querySelector("#reCaptchaLabel");window.reCaptchaOnload=function(){document.querySelector("#g-recaptcha-response").setAttribute("required","true")};window.reCaptchaCallback=function(){reCaptchaLabel.classList.remove("text-danger"),reCaptchaLabel.classList.add("text-success")};window.reCaptchaExpiredCallback=function(){reCaptchaLabel.classList.remove("text-success"),reCaptchaLabel.classList.add("text-danger")};window.renderCaptchas=()=>{document.querySelectorAll(".g-recaptcha").forEach(function(a){let e=a.parentElement.closest("form"),t=e.querySelector('button[type="submit"]'),r=e.querySelector('input[name="reCaptchaToken"]'),n=grecaptcha.render(a,{sitekey:c.key,theme:document.documentElement.getAttribute("data-bs-theme"),callback:function(o){r.value=o,t.removeAttribute("disabled")},"expired-callback":function(){t.setAttribute("disabled","true")},"error-callback":function(){t.setAttribute("disabled","true")}});e.setAttribute("data-g-recaptcha-id",n)})};})();
