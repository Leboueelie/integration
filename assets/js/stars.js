// Génère les étoiles de notation à partir de data-rating
(function () {
  "use strict";

  function renderStars(el) {
    var rating = parseInt(el.getAttribute("data-rating"), 10);
    if (isNaN(rating) || rating < 0) rating = 0;
    if (rating > 5) rating = 5;

    var full = "★";
    var empty = "☆";
    var text = "";
    for (var i = 1; i <= 5; i++) {
      text += i <= rating ? full : empty;
    }
    el.textContent = text;
    el.setAttribute("aria-label", "Note : " + rating + " sur 5");
  }

  function init() {
    var nodes = document.querySelectorAll(".stars");
    for (var i = 0; i < nodes.length; i++) {
      renderStars(nodes[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();