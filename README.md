# Proyecto de Autenticación con Supabase

Este proyecto es una aplicación de autenticación utilizando Supabase. La aplicación permite a los usuarios registrarse, iniciar sesión y mantener su sesión activa.

## Archivos Principales

### `client.ts`

Este archivo configura el cliente de Supabase utilizando las variables de entorno `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.

### `SignUp.tsx`

Este componente permite a los usuarios registrarse proporcionando su correo electrónico y contraseña.

### `Login.tsx`

Este componente permite a los usuarios iniciar sesión proporcionando su correo electrónico y contraseña.

### `App.tsx`

Este archivo contiene la estructura principal de la aplicación y maneja la navegación entre las diferentes rutas.

### `AuthProvider.tsx`

Este archivo proporciona el contexto de autenticación para la aplicación, manejando el estado de autenticación del usuario.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

VITE_SUPABASE_URL=tu_supabase_url VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key 4. Inicia la aplicación con `npm run dev`.

## Uso

- Navega a `/signup` para registrarte.
- Navega a `/login` para iniciar sesión.
- Una vez autenticado, serás redirigido a la página principal.

## Scripts Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
