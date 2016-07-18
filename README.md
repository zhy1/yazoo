# yazoo

* gulp uglify es6 js will be error

> show:

```
[10:38:26] Using gulpfile E:\data\ui\yazoo\gulpfile.js
[10:38:26] Starting 'default'...
gulp.run() has been deprecated. Use task dependencies or gulp.watch task triggering instead.
[10:38:26] Starting 'dist'...
[10:38:26] 'dist' errored after 15 ms
[10:38:26] TypeError: gulp.src(...).pipe(...).pipe is not a function
    at Gulp.<anonymous> (E:\data\ui\yazoo\gulpfile.js:66:4)
    at module.exports (E:\data\ui\yazoo\node_modules\orchestrator\lib\runTask.js:34:7)
    at Gulp.Orchestrator._runTask (E:\data\ui\yazoo\node_modules\orchestrator\index.js:273:3)
    at Gulp.Orchestrator._runStep (E:\data\ui\yazoo\node_modules\orchestrator\index.js:214:10)
    at Gulp.Orchestrator.start (E:\data\ui\yazoo\node_modules\orchestrator\index.js:134:8)
    at Gulp.run (E:\data\ui\yazoo\node_modules\gulp\index.js:22:14)
    at Gulp.run (E:\data\ui\yazoo\node_modules\deprecated\index.js:9:17)
    at Gulp.<anonymous> (E:\data\ui\yazoo\gulpfile.js:72:10)
    at module.exports (E:\data\ui\yazoo\node_modules\orchestrator\lib\runTask.js:34:7)
    at Gulp.Orchestrator._runTask (E:\data\ui\yazoo\node_modules\orchestrator\index.js:273:3)
[10:38:26] Finished 'default' after 18 ms
E:\data\ui\yazoo\node_modules\vinyl-fs\node_modules\readable-stream\lib\_stream_readable.js:523
    dest.end();
         ^

TypeError: dest.end is not a function
    at DestroyableTransform.onend (E:\data\ui\yazoo\node_modules\vinyl-fs\node_modules\readable-stream\lib\_stream_readable.js:523:10)
    at DestroyableTransform.g (events.js:260:16)
    at emitNone (events.js:72:20)
    at DestroyableTransform.emit (events.js:166:7)
    at E:\data\ui\yazoo\node_modules\vinyl-fs\node_modules\readable-stream\lib\_stream_readable.js:965:16
    at nextTickCallbackWith0Args (node.js:420:9)
    at process._tickCallback (node.js:349:13)

```