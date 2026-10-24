// 13aus
(function () {
  "use strict";

  var CHARS = "!<>-_\\/[]{}01█▓░";

  function attachGlitch(el) {
    var orig = el.textContent, frame = 0, iv = null;
    el.addEventListener("mouseenter", function () {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      frame = 0; clearInterval(iv);
      iv = setInterval(function () {
        var prog = frame / 8;
        el.textContent = orig.split("").map(function (ch, i) {
          if (ch === " ") return " ";
          if (i / orig.length < prog) return orig[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("");
        if (++frame > 8) { clearInterval(iv); el.textContent = orig; }
      }, 35);
    });
  }
  document.querySelectorAll(".site-nav a").forEach(attachGlitch);

  // Konami — ↑↑↓↓←→←→BA
  var KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown",
                "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  var pos = 0;
  function unlock() {
    var el = document.createElement("div");
    el.style.cssText = "position:fixed;inset:0;background:#39d353;z-index:9999;opacity:0.15;pointer-events:none;transition:opacity 0.4s;";
    document.body.appendChild(el);
    setTimeout(function () { el.style.opacity = "0"; }, 150);
    setTimeout(function () { el.remove(); }, 600);
    console.log("%caccess granted", "color:#39d353;font-family:monospace;font-size:14px;");
  }
  window.addEventListener("keydown", function (e) {
    pos = (e.key === KONAMI[pos] || e.key.toLowerCase() === KONAMI[pos]) ? pos + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (pos === KONAMI.length) { unlock(); pos = 0; }
  });
})();
