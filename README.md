

<p align="center">
  <img src='./docs/imagotipo.png' width='300px' />
</p>


<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg">
  <a href="https://app.netlify.com/sites/tnote/deploys">
    <img src="https://api.netlify.com/api/v1/badges/a0e055de-cab8-4217-80dd-5bd769b7d478/deploy-status">
  </a>
  <a href='https://coveralls.io/github/taniarascia/takenote'>
    <img src='https://coveralls.io/repos/github/taniarascia/takenote/badge.svg' alt='Coverage Status' />
  </a>
</p>
<p align="center">
  <a href="https://sonarcloud.io/dashboard?id=taniarascia_takenote">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=taniarascia_takenote&metric=sqale_rating">
  </a>
  <a href="https://sonarcloud.io/dashboard?id=taniarascia_takenote">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=taniarascia_takenote&metric=reliability_rating">
  </a>
  <a href="https://sonarcloud.io/api/project_badges/measure?project=taniarascia_takenote&metric=security_rating">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=taniarascia_takenote&metric=security_rating">
  </a>
</p>


<p align="center">
  <img src='./docs/capture_page.png' width='600px' />
</p>

# Ingeniería de Software: Proyecto final de curso

## Perspectiva del producto: Waqya

Waqya se perfila a ser una plataforma web como un medio de difusión de llamados a publicar (_Call for papers_), mediante el cual los usuarios podrán visualizar, comentar y agregar a favoritos los principales _Call for papers_ (C4P) en seminarios, Conferencias, _Workshops_ y _Journals_ en los tópicos más relevantes del área de Ciencia de la Computación.

## Funcionalides del producto

<p align="center">
  <img src='./docs/waqya_funcionalidades.png' width='700px' />
</p>

## Características de los usuarios

  * **El usuario**: El usuario se entiende como un estudiante universitario de Ciencia de la Computación con interés en publicar artículos científicos, así como docentes investigadores y en general personas afines a la investigación en los principales tópicos del área de investigación de _Computer Science_. 

  * **El administrador**: El administrador estará compuesto básicamente por el équipo de desarrollo del proyecto Waqya, todos ellos estudiantes de la Carrera profesional de Ciencia de la Computación.

## Requisitos funcionales
1. **Visualizar los principales C4P**. El sistema visualizará en un panel los C4P con información referida al evento, fechas importantes, lugar en el que se realizará, directivas, guías y demás información necesaria para que el usuario esté informado sobre el proceso de postulación.

1. **Buscar C4P**. El sistema tendrá un mecanismo de búsqueda simple para buscar de forma genérica por cualquier campo que se le especifique.

1. **Buscar C4P por filtros**. Se proveerá el despliegue de opciones para poder hacer una búsqueda personalida por campos como Fechas, Tópicos, Lugares donde se realizará, etc.

1. **Comentar C4P**. Se proporcionará una sección en las publicaciones donde los usuarios podrán realizar comentarios, así mismo podrán interactuar entre ellos.

1. **Guardar C4P favoritos**. Se podrá guardar las publicaciones de interés para los usuarios registrados en la plataforma.

1. **Sucripción a un boletín**. El sistema tendrá un sistema de suscripción a un boletín a temas de interés personalizado.

1. **Registro con API's Google, Facebook y GitHub**: El sistema ofrecerá un sistema de registro para asociar cuentas de Google, Facebook y GitHub.

1. **Registro usual con correo y contraseña**. Así mismo se proveerá la opción de registrarse de forma tradicional con correo y contraseña.

1. **Inicio de sesión con API's Google, Facebook y GitHub**. Análogo a los anteriores requisitos.

1. **Inicio de sesión usual  con correo y contraseña**. Análogo a los anteriores requisitos.


## Requisitos no funcionales

1. **Desempeño**. El sistema presentará un almacenamiento basado en la nube (_Atlas Cluster_), ofreciendo confiabilidad a los usuarios. Teniendo un tiempo de respuesta óptima.

1. **Seguridad**. El acceso se realizará con tokens para encriptar las credenciales de acceso.

1. **Fiabilidad**. El sistema tendrá una confiabilidad moderada debido a las limitaciones de los recursos.

1. **Disponibilidad**. El sistema estará operando al 100% de sus funcionalidades a excepción de que se le esté dando mantenimiento o empiece a fallar algún servicio externo.

1. **Portabilidad**. El sistema debe ser adaptado de forma efectiva y eficiente a diferentes entornos determinados de software, operacionales o de uso. Y será ejecutado en diferentes plataformas.

1. **Usabilidad**. El sistema debe tener la característica de ser comprendido, fácil de usar y ser atractivo para el usuario. Adicionalmente se tiene que tener una tasa baja en errores.

## Diseño de arquitectura

La arquitectura elegida para la implementación del proyecto fue el _stack_ MERN. MERN significa MongoDB, Express, React, Node, después de las cuatro tecnologías clave que componen la pila.

* **MongoDB** - base de datos de documentos.
* **Express** (.js) - Marco web Node.js
* **React** (.js): un marco de JavaScript del lado del cliente
* **Node** (.js): el principal servidor web de JavaScript

<p align='center'>
  <img src='./docs/mern-stack-arquitecture.webp'  src='400'/>
</p>

Express y Node conforman el nivel medio (aplicación). Express.js es un marco web del lado del servidor y Node.js es la popular y potente plataforma de servidor de JavaScript. Independientemente de la variante que elija, ME(RVA)N es el enfoque ideal para trabajar con JavaScript y JSON, en todo momento.

Adicionalmente detallamos algunas de las tecnologías que adoptamos:

* **TypeScript**, como lenguaje de programación.
* **Chakra-UI**, como framework para la interfaz en React.
* **Framer-Motion**, como librería para manipular animaciones en React.

## Diseño del producto

El prototipo del producto se realizó en la herramienta Figma y se disponibiliza en el siguiente enlace:

> [Recurso figma del prototipo (producto mínimo viable)](https://www.figma.com/file/rAApUEZHezknffAMt8TrxC/ProtoV1?node-id=107%3A18)

<p align="center">
  <img src='./docs/prototypes-view-generalpng.png' width='600px'>
</p>

## Contribuidores

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

  <table align="center">
    <tr>
      <td align="center"><a href="https://github.com/reqhiem"><img src="https://avatars.githubusercontent.com/u/52427932?v=4" width="50px;" alt=""/><br /><sub><b>Joel Perca</b></sub></a><br /><a href="https://github.com/reqhiem" title="Code">
      <td align="center"><a href="https://github.com/MisaelVM"><img src="https://avatars.githubusercontent.com/u/64271736?v=4" width="50px;" alt=""/><br /><sub><b>Misael Svante</b></sub></a><br /><a href="https://github.com/MisaelVM" title="Code">
      </td>
      <td align="center"><a href="https://github.com/ElizabethYasmin"><img src="https://avatars.githubusercontent.com/u/62725994?v=4" width="50px;" alt=""/><br /><sub><b>Elizabeth Yasmin</b></sub></a><br /><a href="https://github.com/ElizabethYasmin" title="Code">
      <td align="center"><a href="https://github.com/EdgarEspinozaPE"><img src="https://avatars.githubusercontent.com/u/64268406?v=4" width="50px;" alt=""/><br /><sub><b>Edgar Alfonso</b></sub></a><br /><a href="https://github.com/EdgarEspinozaPE" title="Code">
      </td>
      <td align="center"><a href="https://github.com/ImaMos01"><img src="https://avatars.githubusercontent.com/u/64240176?v=4" width="50px;" alt=""/><br /><sub><b>Imanol Brayan</b></sub></a><br /><a href="https://github.com/ImaMos01" title="Code">
      </td>
    </tr>
  </table>