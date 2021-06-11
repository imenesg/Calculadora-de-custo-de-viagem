function calcular(){
    let km = document.getElementById("distancia");
    let Cmedio = document.getElementById("consumoMedio");
    let pCombustivel = document.getElementById("precoCombustivel");

    let comNece = (km.value / Cmedio.value);/*Combustível necessário*/
    let total = (comNece * pCombustivel.value ).toFixed(2)
    
    let totalPagar = document.getElementById("total")
    totalPagar.innerHTML = `O valor a pagar é <div id ="totalVerde">R$${total}</div>`

}