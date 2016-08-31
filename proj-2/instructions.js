// Instructions for setting up Gulp

// 1. Install Node
// 2. Install Gulp:

npm install gulp -g

// 3. Navigate to your project folder and create the package.json file:

npm init

// 4. Install gulp and gulp-connect on the local project:

npm install gulp --save-dev
npm install gulp-connect --save-dev

// 5. Create the gulpfile.js file in the root directory:

var gulp = require('gulp');        // Tells node to look for the gulp folder
var connect = require('gulp-connect');  // Tells node to look for the gulp folder

gulp.task('connect', function() {  // Function to create the connect server
	connect.server();
});

gulp.task('default',['connect']);  // Tells gulp to run the tasks in the array whenever we type 'gulp' into the terminal