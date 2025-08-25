
<h1 align="center"> juego amigo secreto </h1>

<span style="color: #00BFFF; font-style: italic;">
  Logo del juego
</span>


<div style="text-align: center;">
  <img src="assets/amigo-secreto.png" alt="logo" title="logo" />
</div>


<div style="text-align: right;">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

![Finalizado](https://img.shields.io/badge/Estado_Proyecto-Finalizado-brightgreen)


## 💡 **Sobre el Desafío** 💡
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.


## 🔨 **Funcionalidades Generales:**
1. ***&nbsp; Agregar nombres:*** Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
2. ***&nbsp; Validar entrada:*** Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
3. ***&nbsp; Visualizar la lista:*** Los nombres ingresados aparecerán   en una lista debajo del campo de entrada.
4. ***&nbsp; Sorteo aleatorio:*** Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


## 🔨👀 **Funcionalidades Detalladas:** 👀
* <h4 style="color: red;">Crear un array para almacenar los nombres</h4>

  + Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. Ejemplo:
    ``` javascript
    let amigos = []
    ```
* <h4 style="color: red;"> Implementa una función para agregar amigos</h4>
     Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

  * ***Tareas específicas:&nbsp;***
    Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

      * ***Validar la entrada:*** Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

      * ***Actualizar el array de amigos:*** Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

      * ***Limpiar el campo de entrada:*** Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
 


* <h4 style="color: red;">Implementa una función para actualizar la lista de amigos</h4>

  Crea una función que recorra el array amigos y agregue cada nombre como un elemento **\(\<li\>\)** dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
  * ***Tareas específicas:***

    * ***Obtener el elemento de la lista:*** Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

    * ***Limpiar la lista existente:*** Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

    * ***Iterar sobre el arreglo:*** Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista **\(\<li\>\)**
    para cada título.

    * ***Agregar elementos a la lista:*** Para cada amigo, crear un nuevo elemento de lista

* <h4 style="color: red;">Implementa una función para sortear los amigos</h4>

  
    Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

  * ***Tareas específicas:***

    * ***Validar que haya amigos disponibles:*** Antes de sortear, comprobar si el array amigos no está vacío.

    * ***Generar un índice aleatorio:*** Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

    * ***Obtener el nombre sorteado:*** Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

    * ***Mostrar el resultado:*** Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.


##### ***Estado de las funcionalidades:***
---
* [x] Agregar nombres
* [x] Validar entrada
* [x] Visualizar la lista
* [x] Sorteo aleatorio
      
📁 ***Acceso al proyecto:***  
- Puedes acceder al [código fuente](https://github.com/LucasKronos10/Desafio-amigo-secreto.git) o ver la [demo en vivo](https://lucaskronos10.github.io/Desafio-amigo-secreto/).

🛠️ ***Abrir y ejecutar el proyecto:***
- ***Clona este repositorio:*** `git clone https://github.com/LucasKronos10/Desafio-amigo-secreto.git`
- Abre el archivo `index.html` en tu navegador
  
<h3 style="color: Green; font-style: italic;">Autor</h3>

<a href="https://github.com/LucasKronos10" title="Perfil">
  <img src="https://github.com/LucasKronos10.png?size=40" width="80" alt="Lucas Pavez">
</a>

| ***Lucas Pavez*** |
|-------------------|

<span style="color: red; font-weight: bold; font-style: italic; font-size: 1.17em; line-height: 1.3;">
  Tipo de licencia:
</span>


---
[***Licencia***](LICENSE)






