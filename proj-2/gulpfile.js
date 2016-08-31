// Gulpfile.js

var gulp = require('gulp');        // Tells node to look for the gulp folder
var connect = require('gulp-connect');  // Tells node to look for the gulp folder

gulp.task('connect', function() {  // Function to create the connect server
	connect.server();
});

gulp.task('default',['connect']);  // Tells gulp to run the tasks in the array whenever we type 'gulp' into the terminal