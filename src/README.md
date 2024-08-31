# Aplicación de Gestión de Posts

Esta aplicación React permite gestionar posts con operaciones CRUD (Crear, Leer, Actualizar y Eliminar) usando la API pública de JSONPlaceholder. También incluye una funcionalidad de búsqueda por ID.

## Requisitos

- **Node.js**: Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

- **npm** o **yarn**: Necesitarás un gestor de paquetes como npm (que viene con Node.js) o yarn para instalar las dependencias.

## Instalación

1. **Clonar el Repositorio**

   Primero, clona el repositorio desde GitHub:

   ```bash
   git clone <https://github.com/Dago456/nexosPrueba/tree/c2cbeb676c75e512c9693bb42e07cdc802cddca7/src>

 ## Estructura del proyecto
src/components/: Contiene los componentes React reutilizables de la aplicación.

PostList.js: Componente para mostrar la lista de posts y buscar por ID.
PostModal.js: Componente para mostrar el modal de detalle del post.
CreatePost.js: Componente para crear un nuevo post.
UpdatePost.js: Componente para actualizar un post existente.
SearchBar.js: Componente para buscar posts por ID.
src/App.js: Componente principal que gestiona el estado global y la lógica de la aplicación.

src/index.js: Punto de entrada de la aplicación, donde se renderiza el componente principal App.

public/: Contiene archivos estáticos y el archivo index.html.

package.json: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.

## uso

Buscar Posts: Utiliza la barra de búsqueda para buscar posts por ID.
Agregar Post: Haz clic en "AGREGAR POST" para abrir el modal de creación y añadir un nuevo post.
Actualizar Post: Haz clic en el icono de edición junto a un post para abrir el modal de actualización y modificar el post seleccionado.
Eliminar Post: La funcionalidad de eliminación no está implementada en este proyecto.
