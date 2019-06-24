// 限制文本框：只输入数字：

function kbbCheckNum(obj) {
    function changeNum() {
        var fval = $(this).val();
        var reg = /[^0-9]+/;
        $(this).val(fval.replace(reg, ''));
    }

    $(obj).bind("input propertychange", changeNum);
}

