
const getPosts = async() => { // apunta al id del botón
    const url = "https://jsonplaceholder.typicode.com/posts"
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        const contenedorPosts = document.getElementById('post-data'); //apunta al div para los datos

        const ul = document.createElement('ul'); //creación de lista
        datos.forEach(post => {
            const li = document.createElement('li'); //creación de elementos dentro de la lista
            li.textContent = post.title;
            ul.appendChild(li);
        });

        contenedorPosts.appendChild(ul);

    } catch (error) { // error en caso de no mostrar información 
        console.error('Erorr al obtener los posts.', error);
        alert('Hubo un error al obtener los posts. Por favor, inténtalo de nuevo más tarde.');
    }
};