/* =========================================
   LISTA DE JUEGOS
========================================= */

const juegos = [

    {
        nombre: "2048",
        autor: "Por agregar",
        icono: "🔢",
        categoria: "Puzzle",
        carpeta: "2048_ver2-main",
        archivo: "index.html"
    },

    {
        nombre: "Angelo's Slime Blast",
        autor: "Por agregar",
        icono: "🟢",
        categoria: "Arcade",
        carpeta: "Angelo-s_Slime_Blast-main/Version 1.1"
        archivo: "angelo's_slime_blast1.html"
    },

    {
        nombre: "Game JavaScript",
        autor: "Por agregar",
        icono: "🎮",
        categoria: "Acción",
        carpeta: "Game_JavaScript-main",
        archivo: "index.html"
    },

    {
        nombre: "Introduction JavaScript",
        autor: "Por agregar",
        icono: "💻",
        categoria: "JavaScript",
        carpeta: "introduction_java_script-main",
        archivo: "index.html"
    },

    {
        nombre: "JavaScript",
        autor: "Por agregar",
        icono: "🟨",
        categoria: "JavaScript",
        carpeta: "java_script-main",
        archivo: "index.html"
    },

    {
        nombre: "Tetris",
        autor: "Por agregar",
        icono: "🧱",
        categoria: "Puzzle",
        carpeta: "javascript_tetris-main",
        archivo: "index.html"
    },

    {
        nombre: "JavaScript Game",
        autor: "Por agregar",
        icono: "🎮",
        categoria: "Arcade",
        carpeta: "javascript-main",
        archivo: "index.html"
    },

    {
        nombre: "Juegitos HTML",
        autor: "Por agregar",
        icono: "🌐",
        categoria: "Clásico",
        carpeta: "juegitos_html-main",
        archivo: "index.html"
    },

    {
        nombre: "Juego Java",
        autor: "Por agregar",
        icono: "☕",
        categoria: "Clásico",
        carpeta: "juego_java-main",
        archivo: "index.html"
    },

    {
        nombre: "Juego JavaScript",
        autor: "Por agregar",
        icono: "🎮",
        categoria: "Acción",
        carpeta: "Juego_JavaScript-main",
        archivo: "index.html"
    },

    {
        nombre: "Pac-Man",
        autor: "Por agregar",
        icono: "👾",
        categoria: "Arcade",
        carpeta: "juego_pacman-main",
        archivo: "index.html"
    },

    {
        nombre: "Juego Java",
        autor: "Por agregar",
        icono: "☕",
        categoria: "Clásico",
        carpeta: "juego-java-main",
        archivo: "index.html"
    },

    {
        nombre: "Mi Juego",
        autor: "Por agregar",
        icono: "🎯",
        categoria: "Arcade",
        carpeta: "mi_juego-main",
        archivo: "index.html"
    },

    {
        nombre: "Snake",
        autor: "Por agregar",
        icono: "🐍",
        categoria: "Arcade",
        carpeta: "Snake-main",
        archivo: "index.html"
    },

    {
        nombre: "Space Game",
        autor: "Por agregar",
        icono: "🚀",
        categoria: "Acción",
        carpeta: "space_game-main",
        archivo: "index.html"
    },

    {
        nombre: "Sudoku",
        autor: "Por agregar",
        icono: "🧩",
        categoria: "Puzzle",
        carpeta: "Sudoku-main",
        archivo: "index.html"
    },

    {
        nombre: "Versión 2 Juego",
        autor: "Por agregar",
        icono: "🎮",
        categoria: "Arcade",
        carpeta: "version2_juego-main",
        archivo: "index.html"
    }

];


/* =========================================
   ELEMENTOS DEL HTML
========================================= */

const contenedor =
    document.getElementById("contenedor-juegos");

const buscador =
    document.getElementById("buscar");

const cantidad =
    document.getElementById("cantidad");


/* =========================================
   MOSTRAR JUEGOS
========================================= */

function mostrarJuegos(lista) {

    contenedor.innerHTML = "";


    /* Si no encuentra juegos */

    if (lista.length === 0) {

        contenedor.innerHTML = `

            <div class="sin-resultados">

                <h3>
                    😕 No encontramos ese juego
                </h3>

                <p>
                    Intenta buscar con otro nombre.
                </p>

            </div>

        `;

        cantidad.textContent =
            "0 juegos encontrados";

        return;
    }


    /* Actualizar cantidad */

    cantidad.textContent =
        `${lista.length} juego(s) disponible(s)`;


    /* Crear cada tarjeta */

    lista.forEach(function(juego) {

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add("tarjeta");


        /* Ruta del juego */

        const ruta =
            juego.carpeta +
            "/" +
            juego.archivo;


        tarjeta.innerHTML = `

            <div class="parte-superior">

                <div class="icono">
                    ${juego.icono}
                </div>

                <span class="categoria">
                    ${juego.categoria}
                </span>

            </div>


            <h3>
                ${juego.nombre}
            </h3>


            <p class="autor">
                👤 ${juego.autor}
            </p>


            <a
                class="boton-jugar"
                href="${ruta}"
                target="_blank"
            >
                ▶ JUGAR
            </a>

        `;


        contenedor.appendChild(tarjeta);

    });

}


/* =========================================
   BUSCADOR
========================================= */

buscador.addEventListener(
    "input",
    function() {

        const texto =
            buscador.value.toLowerCase().trim();


        const resultados =
            juegos.filter(function(juego) {

                return (

                    juego.nombre
                        .toLowerCase()
                        .includes(texto)

                    ||

                    juego.categoria
                        .toLowerCase()
                        .includes(texto)

                    ||

                    juego.autor
                        .toLowerCase()
                        .includes(texto)

                );

            });


        mostrarJuegos(resultados);

    }
);


/* =========================================
   CARGAR LOS JUEGOS AL ABRIR LA PÁGINA
========================================= */

mostrarJuegos(juegos);