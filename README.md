# Laboratorio API TypeScript + Django + Docker

## Descripción

Este laboratorio consiste en el desarrollo e integración de una API REST creada en TypeScript con una aplicación web desarrollada en Django. Ambos servicios se ejecutan mediante Docker y se comunican entre sí para mostrar información de usuarios en una página web.

## Objetivo

* Consumir una API REST desarrollada en TypeScript.
* Integrar la API en una aplicación Django utilizando el patrón MTV.
* Ejecutar ambos servicios utilizando contenedores Docker.

## Tecnologías Utilizadas

* TypeScript
* Node.js
* Express
* Django
* Docker
* Docker Compose
* Git y GitHub

## Estructura del Proyecto

```text
Laboratorio-API-DJANGO
│
├── api
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src
│       └── server.ts
│
├── web
│   ├── Dockerfile
│   ├── manage.py
│   ├── config
│   ├── core
│   └── templates
│       └── usuarios.html
│
└── docker-compose.yml
```

## Ejecución del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/alvaroariel57-cmd/Laboratorio-API-DJANGO.git
cd Laboratorio-API-DJANGO
```

### 2. Levantar los servicios

```bash
docker-compose up --build
```

### 3. Acceder a la aplicación

Abrir en el navegador:

```text
http://localhost:8000/usuarios/
```

## Resultado Esperado

La aplicación mostrará una lista de usuarios obtenidos desde la API TypeScript mediante una petición realizada por Django.

## Autor

Álvaro Ariel
Desarrollo Avanzado de Aplicaciones Web
 
