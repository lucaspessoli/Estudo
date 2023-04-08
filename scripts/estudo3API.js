
async function GerarUmFato(){
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const fato = data.fact;
    console.log(fato);
}

GerarUmFato();




var reais = 350;
async function ComprarDolares(x){
    const response = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD')
    const data = await response.json();
    var brl = data.BRLUSD.bid;
    console.log("Você tem: "+ x + " reais, podendo comprar: " + brl*x + " dólares!");
}

ComprarDolares(reais);



//Forma melhorada de fazer com AXIOS, Biblioteca importada no HTML.



axios.get('https://economia.awesomeapi.com.br/last/BRL-USD')
.then((response) => {
    console.log(response.data);
    var r = response.data.BRLUSD.bid;
    console.log("valor: " + r);
});




axios.get('https://valorant-api.com/v1/agents')
.then((response)=>{
    const bonecos = response.data.data;
    console.log(response.data.data);
    bonecos.forEach((agente) =>{
        var a =document.createElement('p');
        a.style.fontFamily = "Snell Roundhand, cursive";
        a.style.fontSize= 20;
        a.style.borderWidth = 4;
        a.style.borderStyle = "solid";
        a.textContent = "";
        var foto = document.createElement("img");
        foto.src = agente.displayIcon;
        foto.width = 30;
        foto.height = 35;
        foto.style.marginBottom = -15;
        a.append(foto);
        a.append(agente.displayName + ": " + agente.description)
        agente.abilities.forEach((habilidade)=>{
            a.append("Habilidades: " + habilidade.displayName + ":");
            var img = document.createElement('img');
            img.src = habilidade.displayIcon;
            img.width = 30;
            img.height = 30;
            a.append(img);
        });
        document.body.appendChild(a);
    })
});







