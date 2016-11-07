(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.errorMessage = "";

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);

    if (toBuyList.items.length == 0) {
      toBuyList.errorMessage = "Everything is bought!"
    };
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.errorMessage = "Nothing bought yet";
  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  alreadyBoughtList.isListEmpty = function () {
    if (alreadyBoughtList.items.length == 0) {
      return true;
    } else {
      return false;
    }
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{name: "Milk", quantity: "1 gallon"},
                {name: "Eggs", quantity: "2 dozen"},
                {name: "Bread", quantity: "1 loaf"},
                {name: "Apples", quantity: "2 dozen"},
                {name: "Oranges", quantity: "6"},
                {name: "Cheese", quantity: "2 lbs"}];

  var toBuyItems = items;
  var alreadyBoughtItems = [];

  service.removeItem = function (itemIndex) {
    alreadyBoughtItems.push(toBuyItems[itemIndex])
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

}

})();
