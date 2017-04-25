/**
 * Created by qq2575896094 on 2017/4/21.
 *
 *  常用工具类
 */

var util = {
    /**
     * 判断类型
     * @param obj
     * @param typeString
     * @returns {boolean}
     */
    isTargetType: function (obj, typeString) {
        return typeof obj === typeString;
    },
    /**
     * 判断是否是个函数
     * @param obj
     * @returns {*|boolean}
     */
    isFunction: function (obj) {
        var that = this;
        return that.isTargetType(obj, "function");
    },
    /**
     * 判断num是否是个数值number
     * @param num
     * @returns {boolean}
     */
    isNumber: function (num) {
        return !isNaN(num);
    },
    /**
     * 判断obj是不是字符串
     * @param obj
     * @returns {*|boolean}
     */
    isString: function (obj) {
        var that = this;
        return that.isTargetType(obj, "string") && obj != null && obj != undefined;
    },
    /**
     * 判断obj是不是boolean类型
     * @param obj
     * @returns {*|boolean}
     */
    isBoolean: function (obj) {
        var that = this;
        return that.isTargetType(obj, "boolean");
    },
    /**
     * 判断obj是不是对象
     * @param obj
     * @returns {*|boolean}
     */
    isObject: function (obj) {
        var that = this;
        return that.isTargetType(obj, "object") && obj != null;
    },
    /**
     * 判断obj是不是数组
     * @param obj
     * @returns {boolean}
     */
    isArray: function (obj) {
        return toString.apply(obj) == '[object Array]';
    },
    /**
     * 仿android的toast提示弹框
     * @param callback  回调函数
     * @param msg       提示内容
     * @param duration  提示时间
     * @param location  出现的位置
     * @param global
     */
    toast: function (callback, msg, duration, location, global) {
        var that = this;

        if (!that.isFunction(callback) && (arguments[0])) {
            msg = arguments[0];
        }
        msg = that.isObject(msg) ? JSON.stringify(msg) : msg;
        duration = Math.abs(that.isNumber(duration) ? Number(duration) : 2000);
        global = that.isBoolean(global) ? global : false;

        var locationArr = ["top", "middle", "bottom"];
        location = location ? location : "bottom";
        location = locationArr.indexOf(location) > -1 ? location : "bottom";

        //实现逻辑
    }

};