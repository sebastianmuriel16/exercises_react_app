# 🏋️‍♂️ Gym Exercises App

Aplicación web construida con **React 19** que permite explorar y aprender diferentes ejercicios utilizando la API pública de [ExerciseDB](https://www.exercisedb.de) (versión 1).  

El proyecto ofrece un buscador de ejercicios, filtros por partes del cuerpo, y una vista de detalle con instrucciones, videos y ejercicios relacionados.

---

## 🚀 Características principales

- 🔎 **Búsqueda de ejercicios**: encuentra ejercicios específicos escribiendo en la barra de búsqueda.  
- 🧍 **Filtros por parte del cuerpo**: explora ejercicios enfocados en pecho, brazos, piernas, espalda, etc.  
- 📋 **Detalles de cada ejercicio**:
  - GIF demostrativo.
  - Músculos objetivo y secundarios.
  - Instrucciones paso a paso.
  - Equipo requerido.
- 🎥 **Videos relacionados**: integración con la API de **YouTube Search & Download (RapidAPI)**.  
- 🔄 **Ejercicios similares**: encuentra ejercicios alternativos que trabajan los mismos músculos.  
- 🏋️ **Ejercicios con el mismo equipo**: descubre variaciones según el material utilizado.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **React 19**  
- ⚡ **Vite** como bundler  
- 🎨 **Material UI (MUI)** para la interfaz  
- 🔄 **React Router DOM** para la navegación  
- 🎞️ **React Spinners** para loaders  
- 🌐 **ExerciseDB API v1** – base de datos de ejercicios  
- 📺 **YouTube Search & Download (RapidAPI)** – videos relacionados  

---

## 📂 Estructura del proyecto

src/
├── components/ # Componentes reutilizables (cards, loader, etc.)
├── pages/ # Páginas principales (Home, ExerciseDetail)
├── assets/ # Imágenes y recursos estáticos
├── App.jsx # Configuración de rutas
└── main.jsx # Punto de entrada


---

## ⚡ Instalación y uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/gym-exercises-app.git
cd gym-exercises-app


Instalar dependencias:

npm install


Configurar variables de entorno:
Crear un archivo .env en la raíz con:

VITE_RAPIDAPI_KEY=tu_api_key_aqui