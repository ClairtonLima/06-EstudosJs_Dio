//Calculo de Viagem e consumo
const precoCombustivelGasolina = 4.99;
const precoCombustivelAlcool = 3.99;
const kmPorLitro = 10;
let distanciaViagem = 100;
const tipoCombustivel = "gasolina";

const litrosConsumidos = distanciaViagem / kmPorLitro;

if (tipoCombustivel === "Etanol") {
    const valorGasto = litrosConsumidos * precoCombustivelAlcool;
    console.log("Valor gasto na viagem por Km: " + "$" + valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoCombustivelGasolina;
    console.log("Valor gasto na viagem por Km: " + "$" + valorGasto.toFixed(2));
}

