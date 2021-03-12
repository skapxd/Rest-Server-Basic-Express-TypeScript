# Pasos a replicar el proyecto - 11/03/21

## Crear API REST

primero se deben instalar las dependencias necesarias para exponer las rutas 

### Dependencias de desarrollo
* @types/express
* @types/cors
* @types/morgan 
* @types/node
* typescript
* tsc-watch

### Dependencias de produccion 
* cors
* express
* morgan
 
Descripcion corta de cada paquete

* "cors" permite que cualquier url pueda solicitar datos a nuestro servidor [Link para mas info](https://www.npmjs.com/package/cors)

* "express" permite crear un servidor minimalista pero poderoso[Link para mas info](https://www.npmjs.com/package/express)

* "morgan" permite hacer logs automaticos de las peticiones que se hacen [Link para mas info](https://www.npmjs.com/package/morgan)

* "typescript" permite hacer codigo tipado y provee "intellisense" caracteristica que puede reducir los errores de escritura de funciones, metodos, y un monton de cosas mas, no se tu, pero a mi me sirve y me gusta [Link para mas info](https://www.npmjs.com/package/typescript)

* "tsc-watch" es una extension de "typescript" y permite crear scripts en funcion del resultado de la traduccion de .ts a .js "Sera muy util para no hacer un npm run build para cada cambio ya que es molesto" [Link para mas info]( https://www.npmjs.com/package/tsc-watch)

* @types/... son los tipados de cada paquete
___

Despues de instalar las dependencias se iniciara el proyecto en TypeScript, se debe ejecutar el siguiente comando "tsc --init " para hacer un par de configuraciones iniciales, las configuraciones en "tsconfig.json" se van a hacer de forma progresiva de forma que se entienda para que sirve cada cambio en dicho archivo 

### Paso 1

Cambiar de 

`"target": "es5",` a `"target": "es6",`

[LINK DE REFERENCIA A LA DOC](https://www.typescriptlang.org/tsconfig#target)

Esta linea indica que el codigo escrito en TypeScript se convertira a la version de JavaScript mencionada

___

`"lib": [], ` a  `"lib": ["ES5", "ES6"],`

[LINK DE REFERENCIA A LA DOC](https://www.typescriptlang.org/tsconfig#lib)

Esta linea es de TypeScript 2.0 y hace referencia a las 
caracteristicas que se usara de JavaScript

___
de 
```json
"outDir": "./",
"rootDir": "./",
```
a
```json
"outDir": "./dist",
"rootDir": "./src",
```

[LINK DE REFERENCIA DE OUTDIR EN A LA DOC](https://www.typescriptlang.org/tsconfig#outDir)

[LINK DE REFERENCIA DE ROOTDIR EN A LA DOC](https://www.typescriptlang.org/tsconfig#rootDir)

Esta linea hace referencia al path del codigo que escribiremos de TypeScript "./src" y la carpeta "./dist" es la traduccion de TypeScript hacia JavaScript

___

`"strictPropertyInitialization": true,` a `"strictPropertyInitialization": false,`

[LINK DE REFERENCIA DE ROOTDIR EN A LA DOC](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization)

esta linea hace referencia a que no es obligatorio inizializar una propiedad dentro de una clase 
___

de `//"moduleResolution": "node",` a `"moduleResolution": "node", `, Notar que se quitaron las "//"

[LINK DE REFERENCIA DE ROOTDIR EN A LA DOC](https://www.typescriptlang.org/tsconfig#moduleResolution)

esta linea hace referencia a una estrategia que aplica TypeScript para el reconocimiento de rutas
___

Ahora empezaremos a crear la estructura, en la carpeta raiz se debera crear 2 carpetas

``` 
root-|
     |/dist
     |/src
```

En mi editor de codigo "VS Code" se veria asi 

![Folder](assets\DOC\folder.png)

La carpeta "/src" contendra el codigo TypeScript donde escribiremos el codigo, y la carpeta "/dist" sera la traduccion a JavaScript que haga TypeScript "como se explico hace un par te parrafos antes"

Dentro de la carpeta src empezaremos con un archivo index.ts donde iniciaremos el servidor 

```ts
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

// middlewares
app.use( cors() );
app.use( morgan('dev') );
app.use( express.json() );

// Init Server
app.listen( port, () => {
    console.log(`Server at http://localhost:${ port }`)
})

```

Bueno, aqui hay varias cositas nuevas, normalmente uno quiere subir la aplicacion node a un hosting y ese hosting expone un puerto para que nosotros podamos hacer el servidor funcione, pero claro, no queremos cambiar de forma constante entre modo desarrollo y modo produccion, entonces creamos una variable `const port = process.env.PORT || 3000;` y le preguntamos si tiene el valor de PORT, si la tiene es porque esta en el hosting y si no la tiene es porque esta en desarrollo

<!-- Conexión con base de datos -->

<!-- CRUD -->