/**
 * Created by qq2575896094 on 2017/3/31.
 *
 * common.js 常用的公共JS模块
 */

var commonJs = {
    //工具类
    util: {
        //获取地理位置
        getCurrentPosition: function (handleSuccess, handleError, opt) {
            if (window.navigator.geolocation) {
                opt = opt ? opt : {enableHighAccuracy: true};
                console.log(opt);
                window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, opt);
            } else {
                alert("浏览器不支持html5来获取地理位置信息");
            }
        }
    }
};