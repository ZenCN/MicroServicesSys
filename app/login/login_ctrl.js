(function() {
    'use strict';

    angular
        .module('app.page')
        .controller('login_ctrl', login_ctrl);

    login_ctrl.$inject = ['$scope', 'login_svr', '$state'];

    function login_ctrl(vm, svr, $state) {
        vm.user = {
            code: undefined,
            password: undefined
        };

        vm.validate = function() {

            if (!isString(vm.user.code)) {
                vm.validate.error = '用户名不能为空！';
                return;
            }

            if (!isString(vm.user.password)) {
                vm.validate.error = '密码不能为空！';
                return;
            }

            svr.validate(vm.user, function(data) {
                if(data > 0){
                    $state.go('dashboard.generation_buckle');
                }else{
                    msg('用户名或密码错误！');
                }
            });
        };

        vm.validate.error = undefined;
    }
})();