# prueba_DATA_BASE


 API de Gestión: Prueba Desempeño DB

Bienvenido Este proyecto es un sistema MVP construido con Node.js y Express que se conecta a una base de datos PostgreSQL.
Permite gestionar clientes, ventas, productos y generar reportes automáticos mediante procedimientos almacenados y tablas.

 Tecnologías Usadas
Backend: Node.js + Express
Base de Datos: PostgreSQL (Esquema: juan_jose)
Herramientas: Postman, DBeaver, Dotenv

 Estructura del Proyecto
src/controllers: Manejan las peticiones y respuestas.
src/routes: Definen los "caminos" de la API (ej. /api/customers).
src/services: Contienen la lógica que habla con la base de datos.
src/config: Configuración de la conexión a Postgres.

 Cómo Empezar
Instalar dependencias: npm install
Configurar variables: Crea un archivo .env con tus credenciales de DB.
Encender motores: npm start o node server.js

Endpoints Principales (Postman)
Método	Ruta	Descripción
POST	/api/customers	Crea un nuevo cliente.
PUT	/api/customers/:id	Actualiza los datos de un cliente existente.
GET	/api/customers	para visualizar los clientes.

 Lógica de la Base de Datos (SQL)
El sistema utiliza Procedimientos Almacenados para automatizar el trabajo sucio:
vincular_clientes_ventas(): Une las ventas solas con sus clientes reales por ID.
calcular_total_ventas_cliente(nombre): Suma todo el valor de las compras y lanza un mensaje con el total en el Output de Postgres.
