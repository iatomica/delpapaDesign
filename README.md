# 🏛️ Delpapa Design — Arquitectura de Interiores & Consultoría Espacial

Plataforma integral de diseño de interiores de alta gama, consultoría espacial y visualizaciones fotorrealistas. Desarrollada bajo los principios estéticos de **taste-skill** (materialidad en travertino romano, roble ahumado y bronce envejecido a la cera, tipografía editorial, composición asimétrica y ausencia de clichés visuales).

---

## ✨ Características Principales

1. **Estética Editorial de Lujo (Taste-Skill)**:
   - Paleta noble inspirada en piedra caliza, mármol travertino Navona y roble europeo.
   - Tipografía de alta legibilidad con titulares en display clásico y cuerpo técnico estructurado.
   - Composición asimétrica fluida respetando estrictamente los guardarraíles visuales (sin botones envueltos, sin gradientes artificiales).

2. **Visualizaciones Arquitectónicas & Renders 3D**:
   - Espacios renderizados en alta fidelidad y curados para cada estancia y proyecto.
   - Calibración de parámetros espaciales: tipología de estancia, lenguaje arquitectónico (Japandi, Minimalismo Cálido, Brutalismo Refinado), materialidad noble e iluminación (2700K indirecta, luz rasante, etc.).
   - Sistema 100% autónomo y autocontenido sin requerir ni almacenar claves de API externas en producción.

3. **Arquitectura Modular (Cero Archivos Monolito)**:
   - Backend desacoplado en `server/` con controladores, servicios, rutas, tipos y semillas independientes.
   - Frontend desacoplado en `client/` con componentes atómicos UI, vistas públicas y portales segmentados por rol.

4. **Portales por Perfil de Usuario**:
   - **Admin (Martina Delpapa)**: Panel de control de dirección, volumen de obras, métricas de consultorías, entregables de diseño y gestión de clientes.
   - **Diseñadora (Elena Varela)**: Workspace técnico con el **Estudio de Renders**, guardado directo de visualizaciones en proyectos, control de especificaciones y buzón de feedback de comitentes.
   - **Cliente (Santiago & Clara Beras)**: Portal privado de la obra (*Penthouse Alvear*), visor interactivo de renders en alta resolución, aprobación/solicitud de ajustes con notas, cronograma de hitos y muestras de materiales.
   - **Público / Visitantes**: Landing page editorial con portafolio de comisiones, manifiesto espacial, catálogo de materiales y solicitud de consultoría privada.

---

## 🔑 Credenciales de Acceso Rápido (Demo)

El sistema cuenta con un selector interactivo de perfil (1-Click Demo) y formulario de login tradicional:

| Rol | Correo Electrónico | Contraseña | Perfil / Proyecto |
|---|---|---|---|
| **Admin** | `admin@delpapadesign.com` | `admin123` | Martina Delpapa (Directora Principal) |
| **Diseñadora** | `designer@delpapadesign.com` | `design123` | Elena Varela (Lead Interior Architect) |
| **Cliente** | `client@delpapadesign.com` | `client123` | Santiago & Clara Beras (*Penthouse Alvear*) |

---

## 📁 Estructura del Proyecto

```
delpapaDesign/
├── Dockerfile                  # Multi-stage production build (Node 20 Alpine)
├── docker-compose.yml          # Configuración para Coolify y Docker local
├── .env.example                # Variables de entorno
├── server/                     # Backend modular Express + TypeScript
│   ├── src/
│   │   ├── config/             # Configuración básica (puerto y entorno)
│   │   ├── controllers/        # auth, renders, projects, stats, consultations
│   │   ├── services/           # visualization, auth, projects, consultations
│   │   ├── routes/             # rutas REST
│   │   ├── types/              # interfaces compartidas
│   │   └── index.ts            # Punto de entrada y servidor de estáticos
└── client/                     # Frontend Vite + React + TypeScript + Tailwind
    ├── src/
    │   ├── components/
    │   │   ├── common/         # Navbar, Footer, Logo, RoleSwitcher
    │   │   ├── public/         # Hero, Filosofía, Obras, Servicios, Materiales, Agendamiento
    │   │   ├── auth/           # LoginModal
    │   │   ├── portal/         # AdminDashboard, RenderStudio, ClientPortal
    │   │   └── ui/             # Button, Input, Badge, Modal
    │   ├── context/            # AuthContext
    │   ├── services/           # Clientes API tipados
    │   └── styles/             # Tokens de diseño Taste-Skill
```

---

## 🚀 Puesta en Marcha en Desarrollo

### 1. Variables de Entorno
```bash
cp .env.example .env
```

### 2. Iniciar Backend
```bash
cd server
npm install
npm run dev
```
El servidor arrancará en `http://localhost:3000`.

### 3. Iniciar Frontend
En otra terminal:
```bash
cd client
npm install
npm run dev
```
La aplicación web estará disponible en `http://localhost:5173`.

---

## 🐳 Despliegue con Docker y Coolify

El proyecto incluye un `Dockerfile` multi-stage optimizado que compila tanto el cliente como el servidor, sirviendo la aplicación unificada en el puerto `3000`.

```bash
# Construir y levantar con Docker Compose
docker compose up -d --build
```
