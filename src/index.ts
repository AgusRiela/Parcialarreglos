let numero1 = <HTMLInputElement>document.getElementById("numero1");
let btnCargarArr = <HTMLButtonElement>document.getElementById("btnCargarArr");
let btnCargarVaL = <HTMLButtonElement>document.getElementById("btnCargarVaL");
let btnMenor = <HTMLButtonElement>document.getElementById("btnMenor");
let btnMayor = <HTMLButtonElement>document.getElementById("btnMayor");
let btnMedia = <HTMLButtonElement>document.getElementById("btnMedia");
let Divresultado = <HTMLParagraphElement>document.getElementById("resultado");
let tamañoarr = Number(numero1.value);
let indice: number;
let arr1: number[] = new Array(tamañoarr);

function numenor(arr1: number[]) {
  let menor: number;
  let j: number = 1;
  menor = arr1[j];
  for (indice = 0; indice < tamañoarr; indice++) {
    if (arr1[indice] < menor) {
      menor = arr1[indice];
    }
  }
  return menor;
}
function numayor(arr1: number[]) {
  let mayor: number;
  let j: number = 1;
  mayor = arr1[j];
  for (indice = 0; indice < tamañoarr; indice++) {
    if (arr1[indice] > mayor) {
      mayor = arr1[indice];
    }
  }
  return mayor;
}
btnCargarArr.addEventListener("click", () => {
  tamañoarr = Number(numero1.value);
});
btnCargarVaL.addEventListener("click", () => {
  for (indice = 0; indice < tamañoarr; indice++) {
    arr1[indice] = Number(
      prompt(`Ingrese los datos del arreglo [ ${indice} ]: `)
    );
  }
  Divresultado.innerHTML = `Los numeros del arreglo son: ${arr1}`;
});
btnMenor.addEventListener("click", () => {
  numenor(arr1);
  Divresultado.innerHTML = `El numero menor es ${numenor(arr1)}`;
  console.log(numenor(arr1));
});
btnMayor.addEventListener("click", () => {
  numayor(arr1);
  Divresultado.innerHTML = `El numero mayor es ${numayor(arr1)}`;
});

btnMedia.addEventListener("click", () => {
  let sumar: number = 0;
  let media: number = 0;
  for (indice = 0; indice < tamañoarr; indice++) {
    sumar = sumar + arr1[indice];
  }
  media = sumar / tamañoarr;
  Divresultado.innerHTML = `El numero media es ${media}`;
});
