const buscador = document.getElementById("buscador");

const juegos = document.querySelectorAll(".juego");

const contador = document.getElementById("contadorVisible");

const sinResultados =
    document.getElementById("sinResultados");


// ==========================================
// BUSCADOR
// ==========================================

buscador.addEventListener("input", function () {

    const texto =
        buscador.value
            .toLowerCase()
            .trim();


    let encontrados = 0;


    juegos.forEach(function (juego) {

        const nombre =
            juego.dataset.nombre.toLowerCase();

        const categoria =
            juego.dataset.categoria.toLowerCase();

        const contenido =
            juego.textContent.toLowerCase();


        if (
            nombre.includes(texto) ||
            categoria.includes(texto) ||
            contenido.includes(texto)
        ) {

            juego.style.display = "flex";

            encontrados++;

        } else {

            juego.style.display = "none";

        }

    });


    // Actualizar contador

    contador.textContent =
        encontrados;


    // Mostrar mensaje cuando no encuentra nada

    if (encontrados === 0) {

        sinResultados.style.display = "block";

    } else {

        sinResultados.style.display = "none";

    }

});


// ==========================================
// ANIMACIÓN AL APARECER
// ==========================================

const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "mostrar"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


juegos.forEach(function (juego) {

    observador.observe(juego);

});


// ==========================================
// MENÚ SUAVE
// ==========================================

const enlaces =
    document.querySelectorAll(
        'a[href^="#"]'
    );


enlaces.forEach(function (enlace) {

    enlace.addEventListener(
        "click",
        function (evento) {

            const destino =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});