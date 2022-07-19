var contabilidad = [
  { periodo: "enero", Ingreso: 1500, Egreso: 100 },
  { periodo: "febrero", Ingreso: 2000, Egreso: 200 },
  { periodo: "marzo", Ingreso: 3000, Egreso: 300 },
  { periodo: "abril", Ingreso: 4000, Egreso: 400 },
  { periodo: "mayo", Ingreso: 5000, Egreso: 500 },
  { periodo: "junio", Ingreso: 6000, Egreso: 600 },
  { periodo: "julio", Ingreso: 7000, Egreso: 700 },
  { periodo: "agosto", Ingreso: 8000, Egreso: 800 },
  { periodo: "septiembre", Ingreso: 9000, Egreso: 900 },
  { periodo: "octubre", Ingreso: 10000, Egreso: 1000 },
  { periodo: "noviembre", Ingreso: 11000, Egreso: 1100 },
  { periodo: "diciembre", Ingreso: 12000, Egreso: 1200 },
];

var acumuladorIngreso = 0;
var acumuladorEgreso = 0;

for (let i = 0; i < contabilidad.length; i++) {
  acumuladorIngreso += contabilidad[i].Ingreso;
  acumuladorEgreso += contabilidad[i].Egreso;
  if (acumuladorIngreso > acumuladorEgreso) {
    console.log(`La empresa no tiene perdidas`);
  } else {
    console.log(`La empresa tiene perdidas`);
  }
}

var creditos = [
  { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 15 },
  { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 10 },
  { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 23 },
];

var interes = 0;
for (let i = 0; i < creditos.length; i++) {
  interes =
    (creditos[i].capital * creditos[i].plazo * creditos[i].tasa) / 36000;
  console.log(`el interes del ${creditos[i].nombre} es ${interes}`);
}
