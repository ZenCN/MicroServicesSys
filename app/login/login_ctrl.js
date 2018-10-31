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

        vm.error_msg = "";

        vm.validate = function() {

            if (!isString(vm.user.code) || isString(vm.user.code) && vm.user.code.trim().length == 0) {
                vm.error_msg = '用户名不能为空！';
                return;
            }

            if (!isString(vm.user.password) || isString(vm.user.password) && vm.user.password.trim().length == 0) {
                vm.error_msg = '密码不能为空！';
                return;
            }

            svr.validate(vm.user, function(data) {
                $state.go('dashboard.generation_buckle');
                /*if(data > 0){

                }else{
                    vm.error_msg = '用户名或密码错误！';
                }*/
            });
        };

        vm.validate.error = undefined;
    }
})();