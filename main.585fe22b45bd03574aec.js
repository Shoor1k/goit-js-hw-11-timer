(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,s,a){},QfWi:function(e,s,a){"use strict";a.r(s);a("L1EO"),a("VA1H")},VA1H:function(e,s){var a={body:document.querySelector("body")},n=(new(function(){function e(e,s){this._markupTimer(),this.targetDate=s,this.selector=e,this._setTimer()}var s=e.prototype;return s._markupTimer=function(){a.body.insertAdjacentHTML("beforeend",'<div class="timer" id="timer-1">\n  <div class="field">\n    <span class="value" data-value="days">11</span>\n    <span class="label">Days</span>\n  </div>\n\n  <div class="field">\n    <span class="value" data-value="hours">11</span>\n    <span class="label">Hours</span>\n  </div>\n\n  <div class="field">\n    <span class="value" data-value="mins">11</span>\n    <span class="label">Minutes</span>\n  </div>\n\n  <div class="field">\n    <span class="value" data-value="secs">11</span>\n    <span class="label">Seconds</span>\n  </div>\n</div>')},s._setTimer=function(){var e=this;setInterval((function(){var s=new Date,a=function(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}}(e.targetDate-s);n.days.textContent=a.days,n.hours.textContent=a.hours,n.mins.textContent=a.mins,n.secs.textContent=a.secs}),1e3)},e}())("#timer-1",new Date("Jul 17, 2021")),{days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')})}},[["QfWi",1]]]);
//# sourceMappingURL=main.585fe22b45bd03574aec.js.map