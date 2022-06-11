# Notas de la aplicacion

Version numero 0.0.1

Creacion del esqueleto de la aplicacion y la instalacion de las diferentes dependencias.

# Dependencias instaladas

  "dependencies": {
    "bcryptjs": "^2.4.3", = Encriptamiento de claves y contraseñas
    "connect-flash": "^0.1.1", = Metodo que permite arrojar mensajes en la sesion del usuario
    "express": "^4.18.1", = Modulo de node JS para la creacion y ejecucion del servidor
    "express-handlebars": "^6.0.6", = Modulo para el renderizado de las vistas
    "express-session": "^1.17.3", = Modulo para la sesion del usuario y que los datos no se compartan
    "method-override": "^3.0.0", = Modulo que guarda en cache las operaciones de la sesion
    "mongoose": "^6.3.6", = Modulo que permite la conexion a la base de datos
    "passport": "^0.6.0", = Modulo para la autenticacion
    "passport-local": "^1.0.0" = Modulo para el guardado de la sesion en local
    "express-validator": "^6.14.1" = Modulo para validacion en el backend

# Dependencias del entorno de desarrollo

Estas dependencias solamente se ejecutan en el entorno de desarrollo y no son necesarias para el desplieque de la aplicacion

  "devDependencies": 
    "nodemon": "^2.0.16" = Permite ejecutar automaticamente el servidor

# Aclaraciones

Al no utilizar un framework de frontend se realiza el proyecto con un modelo vista controlador, las vistas seran renderizadas por un motor de plantillas, en este caso *handlebars*.

# Rutas creadas

En el momento se encuentran configuradas en la carpeta *routes* las siguientes rutas, esto de acuerdo a las vistas que tendra la aplicacion.

- index.js = Vista principa y de inicio de sesion
- doctor-main.js = vista luego del inicio de sesion, debemos determinar que informacion vera el doctor en este punto o si no se vera nada
- consulta.js = vista para la consulta de un paciente