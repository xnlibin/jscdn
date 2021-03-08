/*
 * @Date: 2020-09-09 02:01:44
 * @LastEditors: oldbin
 * @LastEditTime: 2020-09-09 02:09:34
 */

 
//ocpc 埋点
window._agl = window._agl || [];
(function () {
    _agl.push(
        ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
    );
    (function () {
        var agl = document.createElement('script');
        agl.type = 'text/javascript';
        agl.async = true;
        agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(agl, s);
    })();


    //定时上报
    var aglTime = 5000; //ms
    if(typeof ob_aglTime == "number"){
        aglTime  = ob_aglTime;
    } 
    //延时上报
    setTimeout(()=>{
        window._agl && window._agl.push(['track', ['success', {t: 35}]]);
    },aglTime);

})();



