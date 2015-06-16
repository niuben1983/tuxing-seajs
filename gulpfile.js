// 安装插件
// sudo npm install gulp-jshint  gulp-ruby-sass gulp-concat gulp-uglify gulp-util gulp-rename gulp-cssmin gulp-imagemin gulp-replace md5-file imagemin-pngquant imagemin-jpegtran --save-dev

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint      = require('gulp-jshint');
var sass        = require('gulp-ruby-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var cssmin      = require('gulp-cssmin');
var imagemin    = require('gulp-imagemin');
var replace     = require('gulp-replace');
var gutil       = require('gulp-util');
// var livereload  = require('gulp-livereload');
// var amdOptimize = require('amd-optimize');
var md5         = require("md5-file");
var pngquant    = require('imagemin-pngquant');
var jpegtran    = require('imagemin-jpegtran');

var paths = {
    js: [
        'js/**/*.js',
    ],
    img: ['img/*','html/wechat/*.png','html/wechat/*.jpg'],
    sass: 'css/_sass/*.scss',
    css: ['js/layer/skin/*.css', 'css/*.css'],
    html: './*.html'

};

//js压缩
gulp.task('jsmin', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('jsmin'));
});

gulp.task('cssmin', function () {
    
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(gulp.dest('css1'));
});

gulp.task('watchjs', function(){
    gulp.watch(paths.js, function(){
        var localFilePath = arguments[0].path;//获取修改的本地文件名
        var fileMd5 = md5(localFilePath); //获取文件md5
        var fileName = localFilePath.match(/([^\\]+?(js|css))/g)[1];//得到文件名
        // console.log('===========', localFilePath, fileName, fileMd5);
        var js_r = new RegExp('(<script\\s+data\-main\\s*=\\s*[\'\"])(' + '.+' + fileName + ')(\\?.*)(".*?\<\/script\>)')
        gulp.src(paths.html) //遍历所有文件查看引用
            .pipe(replace(js_r,'$1$2'+'?v='+fileMd5+'\"'+' src=\"\.\.\/jsmin\/lib\/require\.js'+'$4'))
            .pipe(gulp.dest('html/'))
        console.log('chage js md5');
    })
});
// css 加md5版本号
gulp.task('watchcss', function(){
    gulp.watch(paths.css, function(){
        var localFilePath = arguments[0].path;//获取修改的本地文件名
        var fileMd5 = md5(localFilePath); //获取文件md5
        var fileName = localFilePath.match(/([^\\]+?(css))/g)[1];//得到文件名
        // console.log('===========', localFilePath, fileName, fileMd5);

        var css_r = new RegExp('(<link\\s+href\\s*=\\s*[\'\"])(' + '.+' + fileName + ')(\\?.*)?' + '([\'\"].+)')//正则，匹配<link>标签
        gulp.src(paths.html) //遍历所有文件查看引用
            .pipe(replace(css_r,'$1$2'+'?v='+fileMd5+'\"'+' type=\"text\/css\" rel=\"stylesheet'+'$4'))
            //如果有引用，则加入md5 hash
            .pipe(gulp.dest('html/'))
            console.log('chage css md5');
    })
});



// 压图
gulp.task('imgmin', function () {
     return gulp.src('./*.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(jpegtran(
            {progressive: true},
            {arithmetic: true}
        )())
        .pipe(gulp.dest('img'));
});

gulp.task('pub', function(){
    gulp.run('imgmin', 'cssmin', 'jsmin')

});

