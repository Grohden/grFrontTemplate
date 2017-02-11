/**
 * Created by gabriel.rohden on 11/02/2017.
 * Gulp tasks
 */
const fs       = require('fs');
const gulp     = require('gulp');
const pug      = require('gulp-pug');
const uglify   = require('gulp-uglify');
const watch    = require('gulp-watch');
const concat   = require('gulp-concat');
let gutil    = require('gulp-util');


gutil.env.type = 'production';
//gutil.env.type = 'client';


/*-----------------------*\
    Tasks Configurations
\*-----------------------*/
const VIEWS_EXTENSION = 'pug';
const SCRIPTS_EXTENSION = 'js';

 /*-----------------*\
         Tasks
 \*-----------------*/


//- Views
gulp.task('watch-views', watchViews);

gulp.task('compile-views', compileViews);

//- Scripts
gulp.task('watch-scripts', watchScripts);

gulp.task('compile-scripts', compileScripts);

//- All
gulp.task('compile-all',['compile-views','compile-scripts']);

gulp.task('watch-all',['watch-views','watch-scripts']);



 /*-----------------*\
       Functions
 \*-----------------*/

//- Views
function compileViews() {
    gutil.log(`compiling views to build/`);
    return gulp.src(`src/views/*.${VIEWS_EXTENSION}`)
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('build/'));
}

function watchViews(){
    gulp.watch(`src/views/*.${VIEWS_EXTENSION}`,['compile-views'])
    .on('change', function(event) {
        gutil.log(`File ${event.path} was ${event.type}, running views compile..`);
    });


}

//- Scripts
function compileScripts() {
    gutil.log('compiling scripts to build/js ');
    return gulp.src(`src/resources/scripts/*.${SCRIPTS_EXTENSION}`)
        .pipe(concat(`scripts.min.${SCRIPTS_EXTENSION}`))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/'));
}

function watchScripts(){
    gulp.watch(`src/resources/scripts/*.${SCRIPTS_EXTENSION}`,['compile-scripts'])
        .on('change', function(event) {
            gutil.log(`File ${event.path} was ${event.type}, running scripts compile..`);
        });
}
