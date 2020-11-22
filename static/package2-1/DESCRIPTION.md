### 工程化的价值
* 可以标准化工作流程和项目结构
* 快速构建项目
* 理解构建应用的流程

### 任务说明
* gulp.src 输出文件流
* gulp.dest 生成文件流
* gulp.pipe 处理流文件
* gulp.series 同步任务
* gulp.parallel 异步任务
* gulp.watch 监听文件
  
### build 说明文档
* 先执行 clean ，清理 'dist', 'temp' 目录
* 异步同时执行 series，image，font，extra
* series：处理html，js，scss文件，生成浏览器可读文件
* image，font：处理图片，字体并压缩
* extra：将不进行处理的文件复制一份到 dist 目路
  
### serve 说明文档
* compile：处理html，js，scss文件，生成浏览器可读文件
* serve：启动node服务，监听静态文件变化