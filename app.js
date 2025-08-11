let amigos = [];

/*
# Captura el valor del input, comprueba si el campo está vacío.
# Si no está vacío, agrega ese valor al array, luego limpia el campo (lo reinicia)
# y finalmente llama a la función Recorrer_lista_amigos.
# Si está vacío, muestra una alerta.
*/
function agregarAmigo() {
    let capturar_amigo = document.getElementById("amigo").value;
    console.log(capturar_amigo);
    if (capturar_amigo === '') {
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(capturar_amigo);
        document.querySelector('#amigo').value = '';
        Recorrer_lista_amigos();
        
    }
    
}

/*
# Obtiene el elemento <ul>, lo limpia para dejarlo vacío,
# luego recorre el array amigos para crear un <li> con cada nombre,
# y los agrega al <ul> para mostrar la lista actualizada.
*/
function Recorrer_lista_amigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
       li.innerHTML = `<b>${amigos[i]}</b>`;
       lista.appendChild(li);
       
        
    }
    

   
    
}

/*
# Genera un número aleatorio según la longitud del array amigos,
# luego captura el elemento donde se mostrará el resultado.
# Si el array no está vacío, muestra el nombre sorteado en pantalla.
*/
function sortearAmigo() {
    let nombre_azar = Math.floor(Math.random() * amigos.length )  ;
    let resultado = document.getElementById("resultado");

    if (amigos.length !== 0) {
        amigos[nombre_azar];
        console.log(nombre_azar);
        resultado.innerHTML = `El amigo/a sorteado es: ${amigos[nombre_azar]}`;
        
    }

}




