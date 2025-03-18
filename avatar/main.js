(function () {
  document
    .querySelector("#file-uploader") //esta seleccionando  el lector de archivos
    .addEventListener("change", function (ev) {
      //change se dispara cuando se agregan o se cambian los archivos
      let files = ev.target.files;
      console.log(files);
      //target es el contro de archivos
      //y recibimosd un objeto con la informacion  de elemento

      //convertir a ur con el objeto
      let image = files[0];

      let imageURL = URL.createObjectURL(image);

      document.querySelector(".profile .img").style.backgroundImage =
        "url('" + imageURL + "')";
    });
})();
