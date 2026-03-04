# 🎁 Giftory API - Backend (Django REST Framework)

Este es el motor de Giftory, una API robusta construida con **Django** y **Django REST Framework** que gestiona la autenticación de usuarios y la administración de listas de regalos personales.

## 🚀 Características principales
- **Autenticación Basada en Tokens**: Registro y login seguros.
- **Seguridad**: Contraseñas encriptadas mediante el sistema de hashing de Django.
- **Relaciones Propietarias**: Los usuarios solo pueden ver, crear y editar sus propios regalos.
- **Auto-Login**: El registro genera y devuelve automáticamente un token de acceso.
- **CORS Configurado**: Listo para comunicarse con el frontend en React.

## 🛠️ Stack Tecnológico
- **Lenguaje:** Python 3.x
- **Framework:** Django 4.x / 5.x
- **API:** Django REST Framework (DRF)
- **Base de Datos:** SQLite (Desarrollo) / PostgreSQL (Recomendado para producción)

## 🔐 Endpoints Principales

| Método | Endpoint | Descripción | Requiere Token |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/register/` | Registra un usuario y devuelve el Token. | No |
| `POST` | `/api/login/` | Autentica usuario y devuelve el Token. | No |
| `GET` | `/api/regalos/` | Lista solo los regalos del usuario autenticado. | Sí |
| `POST` | `/api/regalos/` | Crea un nuevo regalo (asocia el usuario auto). | Sí |
