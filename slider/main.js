class slider {
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
