class viewport {
  static visible(el) {
    let coords = el.getBoundingClientRect(); //nos da la altura conheigh y la distaci arriva con top
    let windowHeight = document.documentElement.clientHeight;
    // y para definir si esta dentro del viewport lo que hay que hacer es que la distancia asi arriva
    //sea menor que la altura de la ventana
    return coords.top < windowHeight && coords.top * -1 < windowHeight;
  }
}

class playOnViewport {
  constructor(video_selector) {
    //buscamos el elemento en e l dom
    this.video = document.querySelector(video_selector);
    this.evaluate = this.evaluate.bind(this);
    //despues vamos hacer  bindEvents de los eventos

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", this.evaluate); //cuando le de escrooll vamos a manda a llar la funcion evaluer
  }

  evaluate() {
    //viewpor es la clase que se definio arriva entre parentecis pasamos el elemonto que sea visible
    if (viewport.visible(this.video)) {
      //si esto da verdadero reproducimos el video
      this.video.play();
    } else {
      this.video.pause();
    }
  }
}

(function () {
  //iniciamos nustra libreria para que arranque el codigo
  new playOnViewport("video");
  //y pasamos nuestro selector que en este caso seria video
})();
