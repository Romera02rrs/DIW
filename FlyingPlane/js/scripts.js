const pixels_a_moure = 15;

function moureAmunt() {

  /**
   * Obtenemos el id del Avión.
   */
  let element = document.getElementById("avio");
  /**
   * Obtenemos la posición Actual del Avión.
   */
  let posActual = getAvioPos(element).top;
  /**
   * Comprobamos que el Avión no se salga de la pantalla.
   */
  if(compruebaPosicionAmuntEsquerra(posActual)){
    /**
     * Creamos la nueva posición sumandole los pixeles.
     */
    let nuevaPos = posActual - pixels_a_moure;
    /**
      * Establecemos la nueva posición al Avión.
      */
    element.style.top = nuevaPos+"px";
  }
}

function moureDreta() {

  let element = document.getElementById("avio");
  let posActual = getAvioPos(element).left;
  if(compruebaPosicionDreta(posActual)){
    let nuevaPos = posActual + pixels_a_moure;
    element.style.left = nuevaPos+"px";
    element.style.transform = "scaleX(1)";
  }
}

function moureAvall() {

  let element = document.getElementById("avio");
  let posActual = getAvioPos(element).top;
  if(compruebaPosicionAbaix(posActual)){
    let nuevaPos = posActual + pixels_a_moure;
    element.style.top = nuevaPos+"px";
  }
}

function moureEsquerra() {

  let element = document.getElementById("avio");
  let posActual = getAvioPos(element).left;
  if(compruebaPosicionAmuntEsquerra(posActual)){
    let nuevaPos = posActual - pixels_a_moure;
    element.style.left = nuevaPos+"px";
    element.style.transform = "scaleX(-1)";
  }
  
}

function compruebaPosicionAmuntEsquerra(posActual){

  let altura = 0;
  if(posActual <= altura){
    return false;
  }else{
    return true;
  }
}

function compruebaPosicionDreta(posActual){

  let altura = window.screen.width - 150;
  if(posActual >= altura){
    return false;
  }else{
    return true;
  }
}

function compruebaPosicionAbaix(posActual){

  let altura = window.screen.height - 75;
  if(posActual >= altura){
    return false;
  }else{
    return true;
  }
}

function passarANumero(n) {

  return parseInt(n == "auto" ? 0 : n);
}

function getAvioPos() {

  let obj = {
    left: passarANumero(getComputedStyle(avio).left),
    top: passarANumero(getComputedStyle(avio).top),
  };
  return obj;
}

function moureAvio(evt) {
  
  cambiaImagen();
  reproduceAudio();

  switch (evt.keyCode) {
    case 37:
      
      moureEsquerra();
      break;
    case 39:

      moureDreta();
      break;
    case 38:

      moureAmunt();
      break;
    case 40:

      moureAvall();
      break;
    case 49:

      audio();
    break;
  }
}

function cambiaImagen(){
  element = document.getElementById("avio");
  element.style.backgroundImage = "url('img/Avion_Fuego.png')";
  element.style.backgroundSize = "120px";
}

function pararAvion() {
  element = document.getElementById("avio");
  element.style.backgroundImage = "url('img/Avion01.png')";
  element.style.backgroundSize = "87px";

  paraAudio();
}

function docReady() {

  window.addEventListener("keydown", moureAvio);
  window.addEventListener("keyup", pararAvion);
  document.getElementById("btn1").addEventListener("click", foto1);
  document.getElementById("btn2").addEventListener("click", foto2);
}


function foto1(){
  document.body.style.backgroundImage = "url('fons_nivells/nivell1.jpg')";
}

function foto2(){
  document.body.style.backgroundImage = "url('fons_nivells/nivell2.jpg')";
}

function audio(){
  let reproductor = document.getElementById("audio");

  if(reproductor.paused){
    reproductor.play();
  } else {
    reproductor.pause();
  }
}

function reproduceAudio(){
  let reproductor = document.getElementById("mou");
  reproductor.play();
}

function paraAudio(){
  let reproductor = document.getElementById("mou");
  reproductor.pause();
}
