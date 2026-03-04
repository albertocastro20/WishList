# 🎁 Giftory - Fullstack Gift List Manager

**Giftory** es una herramienta diseñada para ayudarte a ser una mejor pareja. Permite gestionar listas de deseos interactivas donde puedes agregar, editar, filtrar y marcar regalos como comprados, asegurando que los detalles nunca se olviden.

Este proyecto es una aplicación **Fullstack** moderna que utiliza una arquitectura de microservicios orquestada con **Docker**.

---

## 🚀 Demo en Vivo
¡Haz clic aquí para ver la aplicación funcionando!
🔗 [Enlace al Proyecto](https://wish-list-rose.vercel.app/)

---

¡Importante! si no llega a cargar la página es debido a las pruebas gratuitas del sitio donde se desplegó, en ese caso por favor siga las instrucciones que están al final de esta página para correrlo localmente mediante docker.

## 🏗️ Estructura del Proyecto

* **/giftory**: Frontend desarrollado en **React (Vite)**. Gestión de estado dinámica y UI responsiva.
* **/backend**: API REST robusta construida con **Django** y **Django REST Framework (DRF)**.
* **Base de Datos**: **PostgreSQL 17** (en contenedor Docker).

---

## 🛠️ Tecnologías Principales

| Frontend | Backend | Infraestructura |
| :--- | :--- | :--- |
| React + Vite | Python + Django | **Docker & Docker Compose** |
| JWT Authentication | Django REST Framework | PostgreSQL |
| CSS3 (Media Queries) | CORS Headers | Nginx (Producción) |

---

## ⚙️ Ejecución Local (La forma rápida con Docker)

Gracias a Docker, no necesitas instalar Python, Node.js o PostgreSQL en tu máquina. Solo necesitas tener instalado **Docker Desktop**.

### 1. Clonar el repositorio
```bash
git clone <tu-url-de-github>
cd giftory_project
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
cp ./giftory/.env.example ./giftory/.env
```
(Asegúrate de que VITE_API_URL en ./giftory/.env apunte a http://localhost:8000).

### 3. Levantar la aplicación
```bash
docker compose up --build -d
```

### 4. Preparar la BD
Ejecuta las migraciones una vez que los contenedores estén corriendo
```bash
# Ejecutar migraciones
docker compose exec django-web python manage.py migrate

# Crear superusuario (opcional para el admin)
docker compose exec django-web python manage.py createsuperuser
```

### 5. Accede a la app
¡Listo! Accede a la app en:

Frontend: http://localhost

API / Admin: http://localhost:8000/admin
