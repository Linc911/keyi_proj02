import $ from "jquery"
var ajax = $.ajax;
$.ajax = function (opt) {
    //备份opt中error和success方法  
    var fn = {
        success: function (data, textStatus, jqXHR) {}
    }
    if (opt.success) {
        fn.success = opt.success;
    }
    //扩展增强处理  
    var _opt = $.extend(opt, {
        success: function (data, textStatus, jqXHR) {
            //@todo;
            console.log("未登录或session过期")
            if (data && data.Result) {
                if (data.Result == 4) {
                    //未登录或session过期
                    top.location.href = "/LoginRegister/Login";
                    return;
                } else if (data.Result == 5) {
                    //提示：用户已经在别的地方登录
                    alert("您的帐号已在别处被登录，您被强迫下线的提示信息");
                    //返回登录页面
                    top.location.href = "/LoginRegister/Login";
                    return;
                }
            }
            fn.success(data, textStatus, jqXHR);
        }
    });
    var def = ajax.call($, _opt);
    if ('done' in def) {
        var done = def.done;
        def.done = function (func) {
            function _done(data) {
                //@todo;
                console.log("done的全局拦截器：成功")
                if (data && data.Result) {
                    if (data.Result == 4) {
                        //未登录或session过期
                        top.location.href = "/LoginRegister/Login";
                        return;
                    } else if (data.Result == 5) {
                        //提示：用户已经在别的地方登录
                        alert("您的帐号已在别处被登录，您被强迫下线的提示信息");
                        //返回登录页面
                        top.location.href = "/LoginRegister/Login";
                        return;
                    }
                }
                func(data);
            }

            done.call(def, _done);
            return def;
        };
    }
    if ('fail' in def) {
        var fail = def.fail;
        def.fail = function (func) {
            function _fail(err) {
                //@todo;
                console.log("err全局拦截器:请求出错")
                func(err);
            }

            fail.call(def, _fail);

            return def;
        };
    }

    return def;
};
export default $;