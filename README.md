# 🐶 Doggos — Buscador de Razas de Perros

Mini aplicación web que consume la [Dog CEO API](https://dog.ceo/dog-api/) para buscar razas de perros y mostrar una galería de imágenes.

Proyecto realizado para el **Taller Evaluativo 1** del curso de Ingeniería Web (Universidad de Antioquia).

## Descripción

El usuario escribe el nombre de una raza de perro en el buscador y la aplicación consulta la Dog CEO API para traer 12 imágenes aleatorias de esa raza, mostrándolas en una galería con el nombre de la raza y la sub-raza (cuando aplica) como atributo adicional.

### Características

- Input de búsqueda por raza (soporta razas de una o dos palabras, ej: `husky` o `golden retriever`).
- Botón para ejecutar la búsqueda.
- Listado dinámico de 12 imágenes, cada una con nombre de raza y sub-raza.
- Manejo de errores: raza inexistente, búsqueda vacía y fallos de red.
- Diseño responsivo con grid adaptable.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- [Dog CEO API](https://dog.ceo/dog-api/) — API pública, no requiere API key.

## Cómo ejecutarlo

No requiere instalación ni dependencias. Solo necesitas un navegador y, opcionalmente, un servidor local.

### Opción 1: Abrir directamente

1. Clona el repositorio:
```bash
   git clone <url-del-repositorio>
   cd <nombre-de-la-carpeta>
```
2. Abre el archivo `index.html` directamente en tu navegador.

### Opción 2: Con un servidor local

Si tienes la extensión **Live Server** de VS Code:
1. Clic derecho sobre `index.html` → **Open with Live Server**.
Y luego abre `http://localhost:5500` en tu navegador.

## Estructura del proyecto

├── index.html # Estructura de la página

├── style.css # Estilos visuales

├── script.js # Lógica de búsqueda y consumo de la API

├── resources/ # Imágenes locales

└── README.md

## Cómo funciona

1. El usuario escribe una raza en el input y presiona el botón de búsqueda.
2. Si la raza tiene dos palabras (ej: `golden retriever`), la app invierte el orden y las une con `/`, adaptándose al formato de endpoint que exige la Dog CEO API (ej: `retriever/golden`).
3. Se hace una petición `fetch` a `https://dog.ceo/api/breed/{raza}/images/random/12`.
4. Si la raza no existe, se muestra un mensaje de error junto con una imagen ilustrativa.
5. Si la raza existe, se genera dinámicamente una tarjeta por cada imagen recibida, mostrando la foto y el nombre de la raza y la sub-raza (si aplica).

## Autor

**María de los Ángeles Agudelo Agudelo**
Estudiante de Ingeniería de Sistemas — Universidad de Antioquia
