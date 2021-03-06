(function () {
    'use strict';

    angular
        .module('app.widget')
        .controller('datepicker_ctrl', datepicker_ctrl);

    datepicker_ctrl.$inject = ['$scope', 'datepickerPopupConfig'];

    function datepicker_ctrl(vm, datepickerPopupConfig) {
        //datepickerPopupConfig.appendToBody = true;  //append the body tag

        vm.format = 'yyyy年MM月dd日';

        vm.today = function () {
            vm.dt = new Date();
        };
        vm.today();

        vm.clear = function () {
            vm.dt = null;
        };

        vm.minDate = '2000-01-01';
        vm.maxDate = '2025-12-31';

        vm.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };

        //禁用周日 0、周六 6
        /*vm.disabled = function (date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };*/

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm[$event.target.attributes['is-open'].value] = true;
        };
    }
})();