// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.style.display === "flex";
      links.style.display = open ? "none" : "flex";
      links.style.cssText += open ? "" : "position:absolute; top:76px; left:0; right:0; flex-direction:column; background:var(--cream); padding:20px var(--gutter); gap:16px; border-bottom:1px solid rgba(44,34,28,0.14); z-index:49;";
    });
  }
});
