Trabajo práctico de Digital House donde se usan distintos metodos de Javascript para manipular elementos del DOM

descripcion: El objetivo será añadir nuevas caracteristicas al sitio web usando eventos de mouse y teclado

    base:
        -proyecto proporcionado realizado con express
        -base de datos proporcionada activa en XAMPP

    desafio 1:
        -en index.js agregar un evento para que cada vez que el usuario haga click sobre el menu de digital house se muestre el menu lateral con id="menu"

        -en index.js agregar un evento que permita ocultar el menu lateral cuando el mouse deje el area del menu

        - en moviesList.ejs modificar el practico de la clase anterior para que el modo oscuro se aplique si el usuario pasa el mouse sobre el logo de digital house

        - en moviesAdd.js modificar el titulo para que cambie de color cuando el mouse por encima
    
    desafio 2:
        -en moviesAdd.ejs debemos crear una maquina de destados, debemos detectar cuando el usuario ingrese la palabra "secreto", en el input para ingresar el titulo de la pelicula

        -debemos implementar una variable estadoSecreto que empiece con el numero 0 siguiendo el siguiente patron
                ● 0 significa que todavía no escribió nada.
                ● 1 significa que escribió “s”.
                ● 2 significa que escribió “se”.
                ● 3 significa que escribió “sec”.
                ● 4 significa que escribió “secr”.
                ● 5 significa que escribió “secre”.
                ● 6 significa que escribió “secret”.
        
        -teniendo esto en cuenta implementaremos un evento que al presiona una tecla implemente la siguiente logica 

        1. Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
        2. Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
        3. Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
        4. Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
        5. Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
        6. Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
        7. Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se
        dispara una alerta que diga “SECRETO MAGICO”.
        8. Si no se cumple ninguna de las condiciones, el estado vuelve a 0.

