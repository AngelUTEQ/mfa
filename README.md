# Sistema de Gestión de Tareas con Autenticación Multifactor (MFA)

Este proyecto es una arquitectura de microservicios construida con **Flask** para el backend y **Angular** para el frontend. Ofrece un sistema completo de login con **autenticación multifactor (OTP por Google Authenticator)**, gestión de usuarios, y un módulo de tareas con diferentes estados.

---

## 🧩 Tecnologías Utilizadas

### Backend
- Python 3
- Flask
- SQLite / MySQL
- JWT (JSON Web Token)
- PyOTP (para MFA)
- Flask-CORS
- Microservicios:
  - `auth_service`: login, registro y MFA
  - `user_service`: gestión de usuarios
  - `task_service`: gestión de tareas
  - `api_gateway`: enruta peticiones entre servicios

### Frontend
- Angular 16+
- Angular Standalone Components
- Angular Router
- HttpInterceptor para JWT
- `ngx-qrcode` para generar códigos QR (Google Authenticator)

---

## 📦 Estructura de Microservicios

```plaintext
/micro
├── api_gateway/
├── auth_service/
│   └── rutas de login, registro, OTP (QR)
├── user_service/
├── task_service/
│   └── CRUD de tareas (in progress, revision, paused, completed)
├── frontend/
    └── Angular App (Login, Registro, Lista de Tareas)
