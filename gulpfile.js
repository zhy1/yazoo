'use strict';
//http://lisperator.net/uglifyjs/compress

//http://lisperator.net/uglifyjs/codegen

//https://www.npmjs.com/package/gulp-uglify
const gulp = require('gulp'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename');

//const lazypipe = require('lazypipe');



  const options = {
    mangle: false,
	compress:{
		sequences     : false,  //逗号运算符变成一行 join consecutive statemets with the “comma operator”
		properties    : false,  // 改变属性 optimize property access: a["foo"] → a.foo
		dead_code     : true,  // discard unreachable code
		drop_debugger : true,  // discard “debugger” statements
		unsafe        : false, // some unsafe optimizations (see below)
		conditionals  : true,  // optimize if-s and conditional expressions
		comparisons   : true,  // optimize comparisons
		evaluate      : true,  // evaluate constant expressions
		booleans      : true,  // optimize boolean expressions
		loops         : true,  // optimize loops
		unused        : true,  // drop unused variables/functions
		hoist_funs    : true,  // hoist function declarations
		hoist_vars    : false, // hoist variable declarations
		if_return     : true,  // optimize if-s followed by return/continue
		join_vars     : true,  // join var declarations
		cascade       : true,  // try to cascade `right` into `left` in sequences
		side_effects  : true,  // drop side-effect-free statements
		warnings      : true,  // warn about potentially dangerous optimizations/code
		global_defs   : {}     // global definitions
	},
	output:{
		indent_start  : 0,     // start indentation on every line (only when `beautify`)
		indent_level  : 4,     // indentation level (only when `beautify`)
		quote_keys    : false, // quote all keys in object literals?
		space_colon   : true,  // add a space after colon signs?
		ascii_only    : false, // output ASCII-safe? (encodes Unicode characters as ASCII)
		inline_script : false, // escape "</script"?
		width         : 30,    // informative maximum line width (for beautified output)
		max_line_len  : 1, // maximum line length (for non-beautified output) //设置为99999为所有代码一行
		//ie_proof      : true,  // output IE-safe code?
		beautify      : true, // beautify output?
		source_map    : null,  // output a source map
		bracketize    : false, // use brackets every time?
		comments      : false, // 输出注释 output comments?
		semicolons    : false,  //每个方法后是否空行 use semicolons to separate statements? (otherwise, newlines)
	}
  };


/*

//es6
const browserify = require('browserify'),
	babelify = require('babelify'),
	brfs = require('brfs')


gulp.task('dist', function(cb) {
	return gulp.src('tables.js')
		.pipe(browserify({
			debug: true,
			transform: ["babelify", "brfs"]
		}))
		.pipe(uglify(options))
		//.pipe(rename({ suffix: 'x' }))
		.pipe(gulp.dest('dist'))
})
*/


gulp.task('dist', function(cb) {
    return gulp.src('src/files.lib.js')
		.pipe(uglify(options))
		//.pipe(rename({ suffix: 'x' }))
		.pipe(gulp.dest('dist'))
})

gulp.task('default',function(){
    gulp.run('dist')
})
