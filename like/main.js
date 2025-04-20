const LikeTemplate = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style="fill: rgba(241, 200, 9, 0.9);transform: ;msFilter:;"
  >
    <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
  </svg>
);
class Likeme {
  constructor(selector) {
    this.el = document.querySelector(selector); //aqui guardamos nuestro elemnto
    this.el.style.position = "relative";

    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener("dbclick", (ev) => {
      this.buildHeart(); //mandamos a llaMAr laq funcion que contruye el coraqzon
      this.el.appendChild(this.heart);
    });
  }
  buildHeart() {
    this.heart = document.createElement("div");
    this.heart.style.position = "absolute";
    this.heart.style.top = "40%";
    this.heart.style.left = "40%";
    this.heart.innerHTML = LikeTemplate; //le insertamos el templatelike del que esta arriva
  }
}

(function () {
  new Likeme(".card");
  new Likeme("body");
})();
