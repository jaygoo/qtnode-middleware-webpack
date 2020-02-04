'use strict';

const webpack = require('webpack');
const priter= require('qtnode-middleware-console');
const path = require('path');


module.exports = function (args) {
    const options = Object.assign({}, args);
    const context = options.context;
    const pipeConfig = context.pipeConfig;

    const lanague = !!!pipeConfig.config ? 'js' :
        (!!('lanague' in pipeConfig.config) ? pipeConfig.config['lanague'] : 'js');
    const prodconfig = require(path.resolve(path.resolve(options.rootDir, `wpconf/prod.${lanague}`)));

    return async function (next) {
        priter.info('start build');

        webpack(prodconfig, (err, stats) => {
            if (err) {
                priter.info('build faild');

                throw err;
            }

            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n' );

            if (stats.hasErrors()) {
                priter.info('build faild');

                process.exit(1);
            }
        });
        priter.info('build success');

        next();
    };
};
