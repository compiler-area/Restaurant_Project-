let arr = [{code:1111, name:"pizza", price:65}, {code:3333, name:"pasta", price:50}, {code:5555, name:"salad", price:35}];


const myButton = document.querySelector(".add_button");


myButton.onclick = function(){
    "use strict";
    var regex=/^[a-zA-Z]+$/;
    var name = document.getElementById("meal_name").value;
    var code = document.getElementById("meal_code").value;
    var price = document.getElementById("meal_price").value;
    
    var new_meal = {code:code, name: name, price:price};
    //arr.push (new_meal);
    
    //form validation
    if ((name == "" )|| (code == "") || (price == "")) {
         alert("complete the form please");
         return false;
    }
    if (!name.match(regex) ) {
         alert("Name must be filled with string");
         return false;
    }
    if (isNaN(code)) {
         alert("Code must be filled with numbers");
         return false;
    }
    if (isNaN(price)) {
         alert("price must be filled with numbers");
         return false;
    }
    
    
    //check if the meal is exit
    
    const nameExists = arr.some(ell => ell.name === new_meal.name);    
    if(nameExists) {
         console.log("the meal is exit");
}
     else {
        arr.push (new_meal);
}
    console.log(arr);
};
