window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector("#titulo");

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = "red"
    });

    
    console.log(inputTitulo)
    let estadoSecreto = 0;
    inputTitulo.addEventListener("keypress", (e) => {
        let key = e.key;
        console.log(key)
        
        switch (estadoSecreto) {
                case 0:
                (estadoSecreto == 0 && key == "s") ? estadoSecreto = 1 : "";
                    console.log(estadoSecreto)
                    break;
                case 1:
                    (estadoSecreto == 1 && key == "e") ? estadoSecreto = 2 : "";
                    console.log(estadoSecreto)
                    break;
                case 2:
                    (estadoSecreto == 2 && key == "c") ? estadoSecreto = 3: "";
                    console.log(estadoSecreto)
                    break;
                case 3:
                    (estadoSecreto == 3 && key == "r") ? estadoSecreto = 4 : "";
                    console.log(estadoSecreto)
                    break;
                case 4:
                    (estadoSecreto == 4 && key == "e") ? estadoSecreto = 5: "";
                    console.log(estadoSecreto)
                    break;
                case 5:
                    (estadoSecreto == 5 && key == "t") ? estadoSecreto = 6: "";
                    console.log(estadoSecreto)
                    break;
                case 6:
                    (estadoSecreto == 6 && key == "o") ? alert("Secreto Magico") : "";
                    estadoSecreto = 0
                    console.log(estadoSecreto)
                    break;
                default:
                    console.log("no funciona")
                    break;
            }
            
        
    })
}