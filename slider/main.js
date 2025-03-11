class IndexForSiblings {
  static get(el) {
    let children = el.parentNode.children;

    for (var i = 0; i < children.length; i++) {
      let child = children[i];
      if (child == el) return i;
    }
  }
}

class Slider {
  constructor(selector, movimiento = true) {
    this.move = this.move.bind(this);
    this.moveByButton = this.moveByButton.bind(this);
    this.slider = document.querySelector(selector);
    this.itemsCount = this.slider.querySelectorAll(".container > *").length;
    this.interval = null;
    this.contador = 0;
    this.movimiento = movimiento;

    this.start();
    this.buildControls();
    this.bindEvents();
  }

  start() {
    if (!this.movimiento) return;
    this.interval = window.setInterval(this.move, 3000);
  }

  restart() {
    if (this.interval) window.clearInterval(this.interval);
    this.start();
  }

  bindEvents() {
    this.slider.querySelectorAll(".controls li").forEach((item) => {
      item.addEventListener("click", this.moveByButton);
    });
  }

  moveByButton(ev) {
    let index = IndexForSiblings.get(ev.currentTarget);
    this.contador = index;
    this.moveTo(index);
    this.restart();
  }

  buildControls() {
    for (var i = 0; i < this.itemsCount; i++) {
      let control = document.createElement("li");

      if (i == 0) control.classList.add("active");

      this.slider.querySelector(".controls ul").appendChild(control);
    }
  }

  move() {
    this.contador++;
    if (this.contador > this.itemsCount - 1) this.contador = 0;
    this.moveTo(this.contador);
  }

  resetIndicator() {
    this.slider
      .querySelectorAll(".controls li.active")
      .forEach((item) => item.classList.remove("active"));
  }

  moveTo(index) {
    let left = index * 100;

    this.resetIndicator();
    this.slider
      .querySelector(".controls li:nth-child(" + (index + 1) + ")")
      .classList.add("active");

    this.slider.querySelector(".container").style.left = "-" + left + "%";
  }
}

(function () {
  new Slider(".slider", true);
})();

/*class slider {
  constructor(Selector) {
    this.move = this.move.bind(this); //con esta linea de codigo nos aseguramos que dis no va a cambiar, y que va
    // hacer siempre el objeto q estamos trabajando en ese momento
    this.slider = document.querySelector(Selector);
    this.interval = null;

    //para saber que cantidad de elemento tienen nuestro slider colocamos
    let itemsCount = document.querySelectorAll(".container>*").length;
    console.log(itemsCount);

    //para llevar el registro de como va el movimiento vamos a iniciar por tener un contador
    this.contador = 0;
    //despues lo vamos desmodificar para que sea una solucion mas elegante

    //llamamos el metodo start para que inicie la ejecucion
    this.start();
  }
  start() {
    this.interval = window.setInterval(this.move, 1000);
  }
  move() {
    //aqui vamos aumentar el contador
    this.contador++;
    this.moveTo(this.contador);
  }

  //despues cramos un nuevo metodo llamado
  moveTo(index) {
    //lo que vamos hacer es que el slider se mueva asia esa posicion

    //para manipular el slider: manipulando el margen
    let left = index * 100;
    //aplicamos aqui el slider y le manipulamos su propiedad left
    this.slider.querySelector(".container").style.left = "-" + left + "%";
  }
}

(function () {
  new slider(".slider");
})();
*/
