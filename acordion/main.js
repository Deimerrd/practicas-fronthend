class Accordion {
  constructor(selector, multiple = true) {
    //el contructor multiple ,significa que pueden estar abiertos multiples elemento alavez
    //  y por defecto esta en true
    //es para determinar
    this.acordion = document.querySelector(selector);

    this.multiple = multiple; //guadamos ese multiple aca para saber que opcion nos paso el usuario
    //si no no pasa nada sera por default es true si nos pasa en falso significa que:solo un elemento puede estar abierto
    this.bindEvents();
  }

  bindEvents() {
    this.acordion.querySelectorAll(".item header").forEach((itemHeader) => {
      //agarra todos los encabezados del
      //  item y a cad uno de ellos agregarles un
      //  listener al click paa que sepamos
      //  si tenemos que abrir y cerra el elemento

      itemHeader.addEventListener("click", () => {
        let item = itemHeader.parentNode;
        this.validateMultiple(item); //validacion de multiple
        item.classList.toggle("active");
      });
    });
  }

  validateMultiple(selecctedItem) {
    if (this.multiple) return; //si multiple esta activa eso significa que todos puede estar abierto
    //  ya no hay nada que hacer salimos de la sentencia con returt

    //y en caso de que esto sea falso

    this.acordion.querySelectorAll(".item").forEach((item) => {
      if (selecctedItem == item) return;
      item.classList.remove("active");
    });
  }
}

(function () {
  new Accordion(".acordion", false);
})();

/*class Accordion {
  constructor(selector) {
    //el contructor multiple ,significa que pueden estar abiertos multiples elemento alavez
    //  y por defecto esta en true
    //es para determinar
    this.acordion = document.querySelector(selector);

  }

  bindEvents() {
    this.acordion.querySelectorAll(".item header").forEach((itemHeader) => {
      //agarra todos los encabezados del
      //  item y a cad uno de ellos agregarles un
      //  listener al click paa que sepamos
      //  si tenemos que abrir y cerra el elemento

      itemHeader.addEventListener("click", () => {
        let item = itemHeader.parentNode;
        item.classList.toggle("active");
      });
    });
  }

}

(function () {
  new Accordion(".acordion");
})();
 */
