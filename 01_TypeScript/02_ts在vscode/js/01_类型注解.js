// 类型注解: 是一种轻量级的为函数变量添加的约束
(function () {
    function showMsg(msg) {
        return '窗前明月光,' + msg;
    }
    var msg = '疑是地上霜1111111111';
    //let msg = [1,2,3]
    console.log(showMsg(msg));
})();
