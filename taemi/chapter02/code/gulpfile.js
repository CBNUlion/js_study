// 걸프 의존성을 여기에 쓴다
const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default', function(){
    // 걸프 작업을 여기 쓴다.

    // 노드 소스
    gulp.src("es6/**/*.js")         //변환할 파일 지정
        .pipe(babel())              // 바벨에 파이프로 연결
        .pipe(gulp.dest("dist"));
    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
    
});
