var nombreAutor = "Alejandro";

module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options : {
                banner:"/* Minified on <%= grunt.template.date() %>*/\n", 
                footer:"\n/*Creado por: "+nombreAutor +"*/", 
                compress:{"warnings":true}, 
                mangle:{}, 
                beautify:false, 
                report:"min", 
                expression:false
            },
            app: {
                files: {
                    "js/general.min.js": [
                        "js/utilitario/menu-responsive.js",
                        "js/md-landing/accion.js",
                        "js/md-gestiontarea/tarea.js",
                    ]
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
}