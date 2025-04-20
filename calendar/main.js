const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

class Calendar {
  constructor(options) {
    this.date = options.date || new Date(); //con  optiions de clave date recibimos la fecha en la que querems que inicie. pero si no se nos
    //envia vamos  a hacerlo por defau  lt la fecha actual que se puede obtener  via la instanciacion de un nuevo objeto date

    this.container = options.container;
    //TO DO:Manejo de botones
    // una propiedad es la asociación entre un nombre y un valor, y puede ser una variable o un método ejemplo

    this.calendarTable = null; //este va hacer el elemento que contiene la tabla donde vamos a ir asignando las fechas
    this.onselect = options.onselect;
    this.buildTable(); //este metodo se va a encargar de construir la tabla(constyruye la base para que vayamos colocandio las fechas
    // de los elementos)
    this.bindEvents(); //botones
    this.updateTable();
  }

  updateTable() {
    //actualizar los valores de la tabla dependiendo el mes
    this.calculateDates();
    //primero vamos a optener en que dia de la semana empieza nuestra tabla
    let firstDayInWeek = this.monthStart.getDay(); //getDay devueve un dia de la semana

    let trs = this.calendarTable.querySelectorAll("tr");

    //en vez de crear fila lo que hacemos es obtenerlas en este siglo for
    for (var i = 0; i <= 5; i++) {
      let tr = trs[i];

      let tds = tr.querySelectorAll("td");
      for (var j = 0; j < 7; j++) {
        let td = tds[j];
        let day = i * 7 + j;
        if (day >= firstDayInWeek && day - firstDayInWeek < this.monthLength) {
          td.innerHTML = day - firstDayInWeek + 1;
          td.style.borderStyle = "solid";
          td.dataset.day = day - firstDayInWeek + 1;
        } else {
          td.style.borderStyle = "none";
          td.innerHTML = "";
          td.removeAttribute("data-day");
        }
      }
    }
    this.container.querySelector("header").innerHTML = `${
      months[this.date.getMonth()]
    } - ${this.date.getFullYear()}`;
    //para obtener el index del mes actual damos date.getMont.. el signo de interpolacion es `
  }

  bindEvents() {
    this.buttons = {};
    this.buttons.prev = document.createElement("button"); //crando boton prev
    this.buttons.next = document.createElement("button"); //boton next

    this.buttons.prev.innerHTML = "Anterior"; //agregando descripcion del boton (insertamos contenido)
    this.buttons.next.innerHTML = "Siguiente";

    //los insertamos en el Dom
    this.container.querySelector(".body").appendChild(this.buttons.prev); //le agregamos al calendario los dos botone (siguiente  y anterir)
    this.container.querySelector(".body").appendChild(this.buttons.next); //le agregamos al calendario los dos botone (siguiente  y anterir)

    this.buttons.prev.addEventListener("click", () => this.prev());
    this.buttons.next.addEventListener("click", () => this.next());
  }

  calculateDates() {
    this.monthStart = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      1
    ); //objeto date , utilizando valores del objetos base para optener el primer dia

    this.monthEnd = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      1
    );

    this.monthLength = Math.floor(
      (this.monthEnd - this.monthStart) / (1000 * 60 * 60 * 24)
    );
  }

  next() {
    let month = this.date.getMonth();
    if (month == 11) {
      this.date = new Date(this.date.getFullYear() + 1, 0, 1);
    } else {
      this.date = new Date(this.date.getFullYear(), month + 1, 1);
    }

    this.updateTable();
  }

  prev() {
    let month = this.date.getMonth();
    if (month == 0) {
      this.date = new Date(this.date.getFullYear() - 1, 11, 1);
    } else {
      this.date = new Date(this.date.getFullYear(), month - 1, 1);
    }
    this.updateTable();
  }

  select(el) {
    if (!el.dataset.day) return;
    let date = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      el.dataset.day
    );

    this.onselect(date);
  }

  buildTable() {
    let table = document.createElement("table"); //Crea un nuevo elemento HTML con un nombre de etiqueta específico

    let thead = document.createElement("thead");

    for (var i = 0; i < 7; i++) {
      let td = document.createElement("td");
      td.innerHTML = days[i];
      thead.appendChild(td); //appendchild lo que hace es insertar este nodo (td) dentro del nodo (thead)al final de toso sus hijos
    }

    for (var i = 0; i <= 5; i++) {
      let tr = document.createElement("tr");
      for (var j = 0; j < 7; j++) {
        let td = document.createElement("td");
        td.addEventListener("cilck", (ev) => this.select(ev.currentTarget));

        tr.appendChild(td); //aqui insertaamos los td en cada una de las filas
      }

      table.appendChild(tr); //y afinal agregamos a la tabla esta fila que fuimos generando
    }

    this.calendarTable = table;
    table.appendChild(thead);
    let body = document.createElement("div");
    body.classList.add("body");
    body.appendChild(table);
    this.container.classList.add("facilito-calendar"); //se le agrago una clase a container (facilito-calendar)
    this.container.appendChild(document.createElement("header"));
    this.container.appendChild(body);
  }
}
