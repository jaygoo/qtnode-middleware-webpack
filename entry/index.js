import * as priter from "qtnode-middleware-console";
priter.warn("打连击", 1,2);

var colors = require('colors');

colors.setTheme({
    log: 'white',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    tip: 'cyan'

});

export function warn(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【warn " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).warn);
    }
}

export function error(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【error " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).error);
    }
}

export function debug(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【debug " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).debug);
    }
}

export function data(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【data " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).data);
    }
}

export function help(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【help " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).help);
    }
}

export function info(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【info " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).info);
    }
}

export function log(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【log " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).log);
    }
}

export function tip(...args) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(("【tip " + new Date().Format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString()).tip);
    }
}

Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
warn(1,2,3);