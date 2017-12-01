$.extend(jQuery.validator.messages, {
    required: "必填字段",
    remote: "请修正该字段",
    email: "请输入正确格式的邮箱",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
    minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
    rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
    range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: jQuery.validator.format("请输入一个小于 {0} 的值"),
    min: jQuery.validator.format("请输入一个大于或等于 {0} 的值")
});

$.validator.addMethod('username', function (value, element) {
    return this.optional(element) || _.string.checkStr(value);
}, '账号前缀长度应为1-29个字符，由字母、数字和下划线组成，不能以下划线开头');

$.validator.addMethod('domain', function (value, element) {
    var regExp = /^([a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]\.)+[a-zA-Z]{2,6}$/
    return this.optional(element) || regExp.test(value);
}, '请输入有效域名');

$.validator.addMethod('nickname', function (value, element) {
    var regExp = /^.{1,30}$/
    value = $.trim(value)
    return this.optional(element) || regExp.test(value);
}, '名字为必填项，最长可为30个字符');

$.validator.addMethod('checkPassword', function (value, element) {
    value = $.trim(value);
    var regExp = /^[\x00-\x19\x21-\x7F]{8,16}$/
    var reg2 = /([0-9]+([a-z]|[^0-9a-z])+)|([a-z]+([0-9]|[^0-9a-z])+)|([^0-9a-z]+([a-z0-9])+)/i
    return this.optional( element ) || (regExp.test(value) && reg2.test(value));
}, '密码长度为8-16位，字母、数字或符号两种以上组合');

$.validator.addMethod('domainname1', function (value, element) {
    var regExp = /^[-a-zA-Z0-9]*$/i
    return this.optional(element) || regExp.test(value);
}, '域名需由字母、数字或减号组成');

$.validator.addMethod('domainname2', function (value, element) {
    var regExp = /^[a-zA-Z0-9][-a-zA-Z0-9]*[a-zA-Z0-9]$/i
    return this.optional(element) || regExp.test(value);
}, '域名不能以减号开头和结尾');

$.validator.addMethod('mustSelect', function (value, element) {
    console.log(value)
    return this.optional(element);
}, '请选择');

$.validator.addMethod('noSymbol', function (value, element) {
    var regExp = /^[^!@#$%^&*()<>?]+$/
    return this.optional(element) || regExp.test(value);
}, '不能包含 !@#$%^&*()<>? 等符号');

$.validator.addMethod('noDot', function (value, element) {
    var prefix = value.substr(0, _.lastIndexOf(value, '@'))
        , regExp = /^[^\.]+$/
    return this.optional(element) || regExp.test(prefix);
}, '不能包含 . 符号');

$.validator.addMethod('specifyLength', function (value, element, length) {
    return this.optional(element) || value.length == length;
}, jQuery.validator.format('请输入一个长度是 {0} 的字符串'))

// $.validator.addMethod('email', function(value, element){
//     var regExp = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
//     return this.optional( element ) || regExp.test(value);
// }, '请输入正确格式的电子邮件');

$.validator.addMethod('phonenumber', function (value, element) {
    var regExp = /^(0086|086|86)?(1[3-9]\d{9})$/
    return this.optional(element) || regExp.test(value);
}, '请输入有效手机号码');
//可手机可电话
$.validator.addMethod('contactnumber', function (value, element) {
    var regExp = /^[0-9-]+$/
    return this.optional(element) || regExp.test(value);
}, '请输入有效联系电话');

$.validator.addMethod('fixedphone', function (value, element) {
    return this.optional(element) || _.string.checkTelephone(value)
}, '请输入有效固定电话');

$.validator.addMethod('fax', function (value, element) {
    return this.optional(element) || _.string.checkPhoneFax(value)
}, '请输入有效传真地址');

$.validator.addMethod('noSpace', function (value, element) {
    return value.indexOf(" ") < 0 && value != "";
}, '不允许包含空格');

$.validator.addMethod('pwsRequired', function (value, element, param) {
    // check if dependency is met
    if (!this.depend(param, element)) {
        return "dependency-mismatch";
    }
    if (element.nodeName.toLowerCase() === "select") {
        // could be an array for select-multiple or a string, both are fine this way
        var val = $(element).val();
        return val && val.length > 0;
    }
    if (this.checkable(element)) {
        return this.getLength(value, element) > 0;
    }
    return value.length > 0;
}, '必填字段');

$.validator.addMethod('account', function (value, element) {
    var reg = /(^\d{11}$)|^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/

    return this.optional(element) || reg.test(value);
}, '请输入一个正确的邮箱／手机号');

$.validator.addMethod('requiredTo', function (value, element, param) {

    var target = $(param);
    if (this.settings.onfocusout) {
        target.off(".validate-requiredTo").on("blur.validate-requiredTo", function () {
            $(element).valid();
        });
    }
    return target.val().length;
}, '请填写完整')

$.validator.addMethod('username1', function (value, element) {
    var reg1 = /^[a-zA-Z0-9]\w*$/;
    var reg2 = /^[^\.]+$/;
    return reg1.test(value) && reg2.test(value);
}, '用户名由字母、数字和下划线组成');

$.validator.addMethod('verificationCodeLength', function (value, element, length) {
    return this.optional(element) || value.length == length;
}, jQuery.validator.format('请输入一个长度是 {0} 的验证码'))
