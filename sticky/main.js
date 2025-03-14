(function () {
  let pinged = false;
  let nav = document.querySelector(".nav");

  /*utilizamos la clase de hero-image para definir cual es el punto de retorno y para ellos 
  se crea una nueva funcion*/
  /*y para obtrener su altura lo hacemos con clientHeight*/
  let stickyScrollPoint = document.querySelector(".hero").clientHeight;
  console.log(stickyScrollPoint);

  /*creamos un metodo */
  let coords =
    nav.getBoundingClientRect(); /*nos va a mostra la altura de elemeto y la distacia que tiene el
     elemento  con la esquina superior izquierda y derecha*/
  console.log(coords);
  function pinTopTop() {
    /*si ya esta pegada en la parte de arriva no tenemos nada que hacer . entonces retornamos*/
    if (pinged) return;
    /* y si no esta pegada a la parte de arriva lo que se debe hacer es*/
    /* agregarle la clase correspondiente  a nuestra navegacio*/
    nav.classList.add("pined");
    pinged = true;
  }

  function unPingFromTop() {
    console.log(pinged);
    /*si ya esta pegada en la parte de arriva no tenemos nada que hacer . entonces retornamos*/
    if (!pinged) return;

    /*lo que tenemos que hacer es quitarle la clase con remove*/
    nav.classList.remove("pined");
    pinged = false;
  }

  /*agregamos un evento para cuando el usuario haga scroll sobre la ventana y poder calcular
  la disatacia que queremos enla que el nav se coloque asia arriva*/
  window.addEventListener("scroll", function (ev) {
    /*si las coordenadas son menor o igual a 0 entonces llamar a la funcion pinTopTop*/

    if (window.scrollY < stickyScrollPoint) return unPingFromTop();
    let coords = nav.getBoundingClientRect();
    if (coords.top <= 0) return pinTopTop();

    /*y si no lo que va hacer es mandar a llamar unPingFromTop*/
    unPingFronTop();
  });
})();
