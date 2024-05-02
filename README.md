# Prueba Tecnica Grupalia

Esta tarea es un desafio técnico para la casa que consiste en replicar la UI de una
página web.

La página que debes replicar es esta: https://civitai.com/images

Debes usar el mismo endpoint que utiliza esa página para obtener las imágenes.

Consideraciones

1. No puedes usar frameworks o librerias de componentes (por ej. Boostrap, MUI
   etc.) todo debe ser hecho con CSS manualmente. Te recomendamos usar
   Tailwindcss. Salvo esta restricción, puedes usar cualquier librería para
   organizar tu código, mientras no sea de componentes o UI.
2. Debe ser hecho en algún framework de javascript reactivo: puedes usar Vue,
   React o el que sepas usar mejor.
3. No es necesario que uses los mismos colores, si se te hace más cómodo
   utilizar otros, puedes hacerlo. Siéntete libre de meterle de tu cosecha si crees
   que se puede mejorar la versión original.
4. No hay límite de tiempo, pero está pensada para hacerla en 2 horas.

A continuación te dejamos algunas imágenes que ilustran qué cosas debes
replicar y cuales no son necesarias:

![image](https://github.com/tonomb/grupalia-civitai/blob/main/public/assets/civitai-home.png)

Todo lo encerrado en verde es lo que SI debes replicar, mientras que lo que está en rojo no es necesario.

![alt text](https://github.com/tonomb/grupalia-civitai/blob/main/public/assets/civitai-menu.png)

Acá también, lo que está en verde SI lo debes hacer, lo que está en rojo NO debes hacerlo, y lo que está en morado debes hacerlo, pero no es necesario que tenga las mismas funcionalidades: puedes inventar botones nuevos con lo que se te ocurra que aporta valor y es sencillo de implementar. Por ejemplo, un botón podría ser para descargar la imagen, otro botón podría ser para eliminar la imagen del grid, etc.
Además, debes implementar lo siguiente:

1. Scroll infinito (si usas react-query hay una forma sencilla de hacer esto)
2. Mientras se carga la imagen, el contenedor debe mantener las dimensiones. No es necesario el efecto de blur mientras se carga, pero no deben cambiar
   Prueba técnica 3
   de tamaño los contenedores de las imágenes a medida que van cargando.
3. Mientras se hace el fetch inicial, se debe mostrar un indicador de que la request está cargando, lo mismo para cuando se scrollea hasta el fondo y se cargan las siguientes imágenes.
4. para los emojis, basta con que se muestres el conteo de cada emoji, no es necesario que suceda nada al clickearlos.
   No es necesario que hostees la página en ningún lado, basta con que agregues las instrucciones al README para que yo pueda correrlo localmente. Puedes enviarme el link al repositorio en Github o enviarme un .zip con el código.
   Éxito

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
