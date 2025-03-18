// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables para gestionar la lista de personas
// Variables para gestionar la lista de amigos
let listaAmigos = [];
const amigoInput = document.getElementById('amigo');
const listaElement = document.getElementById('listaAmigos');
const agregarButton = document.getElementById('agregar');
const sortearButton = document.getElementById('sortear');
const resultadosDiv = document.getElementById('resultado');

// Función para agregar un amigo a la lista
agregarButton.addEventListener('click', function() {
    const amigo = amigoInput.value.trim();
    if (amigo) {
        listaAmigos.push(amigo);
        amigoInput.value = ''; // Limpiar el campo de texto

        // Actualizar la lista visible
        actualizarLista();
    } else {
        alert('Por favor, ingresa un nombre.');
    }
});

// Función para actualizar la lista visible
function actualizarLista() {
    listaElement.innerHTML = ''; // Limpiar la lista actual
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear amigos secretos
sortearButton.addEventListener('click', function() {
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos dos personas para realizar el sorteo.');
        return;
    }

    let amigosSecretos = [...listaAmigos];
    let sorteos = {};

    // Realizar el sorteo aleatorio
    amigosSecretos = amigosSecretos.sort(() => Math.random() - 0.5); // Mezclar los nombres
    listaAmigos.forEach((amigo, index) => {
        sorteos[amigo] = amigosSecretos[(index + 1) % amigosSecretos.length];
    });

    // Mostrar los resultados
    mostrarResultados(sorteos);
});

// Función para mostrar los resultados
function mostrarResultados(sorteos) {
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    const ulResultados = document.createElement('ul');
    for (const amigo in sorteos) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${sorteos[amigo]}`;
        ulResultados.appendChild(li);
    }
    resultadosDiv.appendChild(ulResultados);
}
