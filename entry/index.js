'use strict'

const priter= require("qtnode-middleware-console");
const path = require("path");

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();


module.exports = function (args) {
    console.log(path.resolve(path.resolve(args.rootDir, 'wpconf/prod.js')));

    let opts = Object.assign({}, args);
    const packagejson = require(path.resolve(path.resolve(opts.rootDir, 'package.json')));
    const prodconfig = require(path.resolve(path.resolve(opts.rootDir, 'wpconf/prod.js')));
    const compiler = webpack(prodconfig);

    return async function (next) {
        priter.info("start dev");

        // 使用webpack-dev-middleware中间件
        app.use(webpackDevMiddleware(compiler, {
            publicPath: prodconfig.output.publicPath,
            info: false,
            noInfo: true
        }));

        // 使用webpack-hot-middleware中间件，配置在console台输出日志
        app.use(webpackHotMiddleware(compiler, {
            log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000}));
        // app.use(express.static(config.output.path))

        // 使用静态资源目录，才能访问到/dist/idndex.html
        app.use(express.static(prodconfig.output.path))

        // Serve the files on port 3000.
        const server = app.listen( ()=> {
            console.info(`devserver listening: http://localhost:${server.address()['port']}` );
        })

        next();

    };

};
