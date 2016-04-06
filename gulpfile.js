const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

var files =['index.js', 'lib/**/*.js', 'test/**/*.js','gulpfile.js'];

gulp.task('mocha', function(){
  return gulp.src(['./test/**/*test.js'], { read : false })
  .pipe(mocha({
    reporter:'landing'
  }))
  .on('error', gutil.log);
});

gulp.task('lint:test', function(){
  return gulp.src('lint:test', ()=> {
    return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules:{
        'indent':['error', 2]
      },
      envs:[
        'mocha'
      ]
    }));
  });
});

gulp.task('lint:nontest', ()=>{
  return gulp.src(files)
  .pipe(eslint({
    rules:{
      'indent':['error', 2]
    }
  }))
  .pipe(eslint.format());
});



gulp.task('watch-files', function(){
  gulp.watch(['lib/**', 'test/**'],['mocha']);
  gulp.watch(['lib/**', 'test/**'],['lint:test']);
  gulp.watch(['lib/**', 'test/**'],['lint:nontest']);
});


gulp.task('index', ['watch-files']);
gulp.task('default', ['index']);
