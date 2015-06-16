define(function(require, exports, module) {
    var $ = require('jquery');
    var rRoute, rFormat;
    /**
     * 在一个对象中查询指定路径代表的值，找不到时返回undefined
     * @param {Object} obj 被路由的对象
     * @param {Object} path 路径
     */
    $.route = function(obj, path) {
        obj = obj || {};
        var m;
        (rRoute || (rRoute = /([\d\w_]+)/g)).lastIndex = 0;
        while ((m = rRoute.exec(path)) !== null) {
            obj = obj[m[0]];
            if (obj == undefined) {
                break;
            }
        }
        return obj;
    };
    /**
     * 格式化字符串
     * @param {string} 0 包含{}的字符串
     * @param {Array|Json} 1 用来格式化的data的数据
     */
    $.format = function() {
        var args = $.makeArray(arguments),
            str = String(args.shift() || ""),
            ar = [],
            first = args[0];
        args = $.isArray(first) ? first : typeof(first) == 'object' ? args : [args];
        $.each(args, function(i, o) {
            ar.push(str.replace(rFormat || (rFormat = /\{([\d\w\.]+)\}/g), function(m, n, v) {
                v = n === 'INDEX' ? i : n.indexOf(".") < 0 ? o[n] : $.route(o, n);
                return v === undefined ? m : ($.isFunction(v) ? v.call(o, n) : v)
            }));
        });
        return ar.join('');
    };


    $.ranth = function() {
        // alert(111);
    }


});