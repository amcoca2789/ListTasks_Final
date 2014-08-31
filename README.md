ListTasks_Final
===============
Crea tu propia lista de tareas


Preprocesador: Stylus
=====================

 * **Instalación:** [https://github.com/LearnBoost/stylus][1]
```sh
npm install stylus -g
```
 * **Ir al directorio donde se encuentra el archivo "estilos.styl" :**
```sh
.../stylus/
```
 * **Stylus Compile:**
```sh
stylus estilos.styl
```
 * **[optimizado] Stylus Compile:**
```sh
stylus -w estilos.styl
```
 * **Copiar el Styl Compilado a una ruta especifica:**
```sh
stylus estilos.styl --out ../css
```
 * **[optimizado] Copiar el Styl Compilado a una ruta especifica:**
```sh
stylus -w estilos.styl --out ../css
```

    
Stylus con NIB : 
==============
 * **Instalacion** [https://github.com/visionmedia/nib][2]
```sh
npm install nib
```
 * **Uso de NIB en el .styl**
```styl
@import 'nib'
``` 
 * **NIB (Orden, Prefijos de Navegadores, etc)**
```sh
stylus -u nib -w estilos.styl
```
 * **Ordena**
```sh
stylus -u nib -w -o ../css/ estilos.styl
```
 * **Optimiza**
```sh
stylus -u nib -w -c ../css/ estilos.styl
```
* **Ordena y Optimiza**
```sh
stylus -u nib -w -c -o ../css/ estilos.styl
```

GRUNT
-----

 - **Instalar grunt-cli de forma global (1
   sola vez se realiza esto)** [http://gruntjs.com/getting-started][3]
```sh
npm install -g grunt-cli
```
 - Crear el archivo
```sh
Gruntfile.js
```
 - Ir a la carpeta donde están nuestro archivo 
```sh
Gruntfile.js
```
 - Instalar grunt local
```sh
npm install grunt --save-dev
```
**(Esta instalación, crea la carpeta "node-modules")**
    

GRUNT con uglify
----------------

 - Ir a la carpeta donde están nuestro archivo 
```sh
Gruntfile.js
```
 - Instalar grunt-cli de forma global (1 sola vez se realiza esto) [https://github.com/gruntjs/grunt-contrib-uglify][4] 
```sh
npm install grunt-contrib-uglify --save-dev 
```
 - Añadir la siguiente línea en el archivo Gruntfile.js
```sh
grunt.loadNpmTasks('grunt-contrib-uglify');
```
 - Registrar Tarea Propia por DEFAULT
```sh
grunt.registerTask('default', ['uglify']);
```
 - Ejecutar una tarea "default" de Gruntfile.js 
```sh
grunt -v
```
                              


  [1]: http://https://github.com/LearnBoost/stylus
  [2]: https://github.com/visionmedia/nib
  [3]: http://gruntjs.com/getting-started
  [4]: https://github.com/gruntjs/grunt-contrib-uglify
