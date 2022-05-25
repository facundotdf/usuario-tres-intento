let claveUsuario: string = "eureka";
let veces: number = 0;
let intento: number = 3;

do {
  let ingreseClave: string = prompt(" ingrese clave");
  if (ingreseClave === claveUsuario) {
    alert(" Su clave es correcta.   Bienvenidx !");
    veces = 3;
  } else {
    alert(
      "Clave incorrecta." + " Intente nuevamente." + "Intento nº" + intento
    );
    veces = veces + 1;
    intento = intento - 1;
    if (veces === 3) {
      alert("clave bloqueada");
    }
  }
} while (veces < 3);
