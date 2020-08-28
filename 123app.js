document.querySelector(".add__btn").addEventListener("click", function () {
  console.log(
    document.querySelector(".add__description").value +
      " " +
      document.querySelector(".add__value").value
  );
});

var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {
  console.log("sain uu!");
})();

var appController = (function (uiController, financeController) {
  uiController.publicAdd(150);
})(uiController, financeController);

var hunController = (function () {
  //     // data encapsulation

  //     // private data
  var bodol = "Javascript толгой эргүүлмээр юм...";
  function tsusGuih() {}
  //     // private function
  function huchilturugchiigAgaaraasSorjTsusruuOruulah() {}

  return {
    yarih: function () {
      bodol = "Javascript бол лаг";
      huchilturugchiigAgaaraasSorjTsusruuOruulah();
      tsusGuih();
      console.log("hi");
    },
  };
})();
