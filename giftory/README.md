# Giftory (Frontend en React)


##  Características Clave Implementadas

El proyecto demuestra las siguientes habilidades y patrones:

1.  **Persistencia de Datos Robusta:**
    Persistencia en Base de Datos Relacional mediante una API REST propia creada en Django. Se realiza uso del localStorage para el manejo del Token
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
