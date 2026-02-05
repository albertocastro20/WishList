# 💖 Girlfriend's Wishlist | Lista de Deseos Interactivo

![Live Demo](https://img.shields.io/badge/Vercel-Deploy-lightgray?style=for-the-badge&logo=vercel)

🚀 Ver Proyecto en Vivo (Live Demo)
¡Haz clic aquí para ver la aplicación funcionando!

https://wish-list-rose.vercel.app/

Enlace Directo: https://wish-list-rose.vercel.app/
---

## 🎯 Descripción del Proyecto

"Girlfriend's Wishlist" es una aplicación de lista de deseos interactiva diseñada para demostrar habilidades en la gestión de estado de React, persistencia de datos y desarrollo de UI responsiva.

El objetivo principal es mantener una lista de regalos donde los artículos se pueden agregar, editar, filtrar y marcar como comprados, asegurando que todos los datos persistan en el navegador.

El sitio en si es una herramienta para ser una MEJOR pareja, ya que es util para ser detallista

---

## ✨ Características Clave Implementadas

El proyecto demuestra las siguientes habilidades y patrones:

1.  **Persistencia de Datos Robusta:**
    * La lista de deseos se carga de la **`localStorage`** al inicio (usando `useState`) y se guarda automáticamente al cambiar (usando **`useEffect`**), asegurando que los datos no se pierdan al recargar.
2.  **Gestión de Estado Compleja (CRUD):**
    * Implementación de funciones para **Crear**, **Editar** y **Eliminar** ítems, con un componente `InputCard` reutilizado para ambos modos (creación y edición).
    * **Manejo de IDs Seguros:** Uso de la librería **`uuid`** para generar identificadores únicos universales y prevenir colisiones de datos.
3.  **Filtrado Combinado Dinámico:**
    * Filtra la lista de regalos en tiempo real basándose en **tres criterios simultáneos**:
        * **Categoría** (`Gifts`, `Travels`, `Dates`).
        * **Estatus** (`Comprado` o `Pendiente`) vía *Radio Buttons*.
        * **Búsqueda de Texto** instantánea por nombre y descripción.
4.  **Mejoras de UI/UX:**
    * **Resaltado de Texto:** Los caracteres que coinciden con la búsqueda se colorean dinámicamente.
    * **Responsividad Móvil:** El diseño está optimizado para escritorio y dispositivos móviles mediante **Media Queries** en CSS.
    * **Transiciones CSS:** Uso de la propiedad `transition` para un feedback visual suave en el `hover` y el estado de `comprado`.

---

## 🛠️ Tecnologías y Herramientas

* **Framework:** React (Vite)
* **Gestión de Estado:** React Hooks (`useState`, `useEffect`)
* **Lenguaje:** JavaScript ES6+
* **Persistencia:** Local Storage API
* **Despliegue (Hosting):** Vercel
