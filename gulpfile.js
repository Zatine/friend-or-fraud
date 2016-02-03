var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence'),
    sassdoc = require('sassdoc'),
    concat = require("gulp-concat"),
    mainBowerFiles = require("main-bower-files"),
    inject = require('gulp-inject')
    naturalSort = require('gulp-natural-sort');

// Development Tasks
// -----------------
// ... variables
var autoprefixerOptions = {
    browsers: ['last 2 versions','ie >= 9', '> 5%', 'Firefox ESR']
};

// Start browserSync server
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('index', function(){
  var target = gulp.src('./app/index.html'),
      lib = gulp.src(['lib/*.js'], {cwd: __dirname + '/app'}).pipe(naturalSort()),
      sources = gulp.src(['scripts/**/*.js', 'style/*.css'], {read: false, cwd: __dirname + '/app'});
  
  return target.pipe(inject(lib, {starttag: '<!-- inject:head:{{ext}} -->'}))
         .pipe(inject(sources)) 
         .pipe(gulp.dest('./app'));
})

gulp.task('build-index', function(){
  var target = gulp.src('./dist/index.html'),
      lib = gulp.src(['lib/*.js'], {cwd: __dirname + '/dist/'}).pipe(naturalSort()),
      sources = gulp.src(['scripts/*.js', 'style/*.css'], {read: false, cwd: __dirname + '/dist/'});
  
  return target.pipe(inject(lib, {starttag: '<!-- inject:head:{{ext}} -->'}))
         .pipe(inject(sources)) 
         .pipe(gulp.dest('./dist'));
})

gulp.task('sass', function() {
    return gulp.src('app/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/style'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
	return gulp.src("app/scripts/**/*.js")
          .pipe(concat('main.js'))
          .pipe(gulp.dest("./dist/scripts"));
});

gulp.task('css', function(){
    return gulp.src('app/style/*.css')
           .pipe(concat('style.css'))
           .pipe(minifyCSS())
           .pipe(gulp.dest('./dist/style'));
})

gulp.task('lib', function() {
	return gulp.src("app/lib/*.js")
          .pipe(gulp.dest("./dist/lib"));
});

gulp.task('bower', function(){
    var files = mainBowerFiles();
    return gulp.src(mainBowerFiles())
           .pipe(gulp.dest('app/lib'));
});


// Watchers
gulp.task('watch', function() {
    gulp.watch('app/style/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/scripts/**/*', browserSync.reload);

});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {
    var assets = useref.assets();

    return gulp.src('app/**/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Optimizing Images
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('avatars', function() {
    return gulp.src('app/avatars/*.svg')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest('dist/avatars'));
});

// Copying fonts
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

// Cleaning
gulp.task('clean', function(callback) {
    del('dist');
    return cache.clearAll(callback);
});

gulp.task('clean:build', function(callback) {
    del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch', 'bower', 'index'],
        callback
    );
});

gulp.task('build', ['sass', 'js', 'lib', 'css', 'useref', 'images', 'fonts', 'avatars'], function(callback) {
    runSequence(/*'clean:build',*/
        ['build-index'],
        callback
    );
});
