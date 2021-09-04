let arr = [{ code: 1111, name: "pizza", price: 65 }, { code: 3333, name: "pasta", price: 50 }, { code: 5555, name: "salad", price: 35 }];


const myButton = document.querySelector(".add_button");

myButton.onclick = function () {
    "use strict";
    var name = document.getElementById("meal_name").value;
    var code = document.getElementById("meal_code").value;
    var price = document.getElementById("meal_price").value;

    var new_meal = { name: name, code: code, price: price };
    arr.push(new_meal);
    console.log(arr);
};