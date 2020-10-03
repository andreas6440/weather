# API

> Pronóstico del tiempo generado aleatoriamente.

## Instalación

Clonar repositorio desde github e instalar dependencias ejecutando el comando:

```bash
npm install # yarn
```

## Desarrollo

Copiar el contenido del archivo `.env.example` en un nuevo archivo llamado `.env`:

```bash
# linux / macos
cp .env.example .env

# windows
copy .env.example .env
```

Poner en marcha al servidor de desarrollo:

```bash
npm run dev # yarn dev
```

## Librerías

**express:** esta librería cuenta con utilidades que falicitan la creación de una API sólida en poco tiempo.

**dotenv-safe:** a diferencia de la librería _dotenv_, esta versión obliga al programador el crear un archivo `.env.example` que sirve de ejemplo al archivo `.env`, además, las variables declaradas en el primero deben estar sí o sí en el segundo para que el servidor no arroje excepciones.

**winston / morgan:** librerías útiles para el logging de ocurrencias.

**helmet:** configura cabeceras que brindan mayor seguridad a la API.

**compression:** middlware para la compresión de cuerpos en respuestas.

**method-override:** permite el uso de más verbos (PUT, PATCH, DELETE) en la API.

## Explicación

La API cuenta con tan solo un par de endpoints distintos:

`/status`

Retorna un JSON con un único campo: `message` y sirve para verificar el estado de la API.

`/weather?city={string}` o `/weather?city={string[]}`

Este endpoint recibe el query param `city`que puede ser un `string` o `string[]`. En base a él, la API retornará el "pronóstico del clima" para la ciudad (o ciudades) especificada. Aun así, dicho pronóstico es generado de manera aleatoria, es decir: ninguna ciudad tendrá el mismo resultado dos veces.

---

# CLIENTE

> Consumo de API

# Instalación

Clonar repositorio desde github e instalar dependencias ejecutando el comando:

```bash
npm install # yarn
```

## Desarrollo

Poner en marcha al servidor de desarrollo:

```bash
npm run dev # yarn dev
```

## Librerías

**react-map-gl:** visualización de la coordenadas generadas por la API.

**axios:** cliente HTTP para el consumo de la API.

## Explicación

Se utiliza la Context API de React para tener una sola fuente de la verdad (single source of truth) en el proyecto consumida por los distintos componentes.

Axios es el encargado de hacer las consultas HTTP a la API con el fin de mostrarla en pantalla.

React Map GL ubica las coordenadas devueltas por la API en un mapa del mundo.
