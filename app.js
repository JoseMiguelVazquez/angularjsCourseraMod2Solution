(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .factory('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuy();

        toBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }

    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getBought();
    };

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            { name: 'cookies', quantity: 10 },
            { name: 'chips', quantity: 4 },
            { name: 'sugary drinks', quantity: 5 },
            { name: 'Pepto Bismol', quantity: 2 },
            { name: 'Bread', quantity: 1 },
        ];

        var bought = [];

        function getToBuy() {
            return toBuy;
        }

        function getBought() {
            return bought;
        }

        function buyItem(itemIndex) {
            var itemBought = toBuy[itemIndex];
            toBuy.splice(itemIndex, 1);
            bought.push(itemBought);
        }

        return {
            getToBuy: getToBuy,
            getBought: getBought,
            buyItem: buyItem
        };

    };

})();