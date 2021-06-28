$(document).ready(function(){
   function Pizza(size,crust,topping){
    this.mySize = size;
    this.myCrust = crust;
    this.myTopping = topping;
   }
})

pizza.prototype.pizzaPrice = function(){
    return this.crustPrice()+ this.toppingPrice() + this.sizePrice();
};


Pizza.prototype.toppingPrice = function(){
    if(this.mySize === "large"){
        if(this.myTopping === "TOMATO TOPPING"){
            return 70;
        }else if(this.myTopping === "MUSHROOM TOPPING"){
            return 50
        }else if(this.myTopping === "ONION TOPPING" ){
            return 100;
        }else if(this.myTopping === "OLIVES TOPPING" ){
            return 70;
        }else if(this.myTopping === "VEGETABLES TOPPING"){
            return 50;
        }else(this.myTopping === "SALAMI TOPPINGS")
        {
            return 80;
        }
    } if(this.mySize === "medium"){
        if(this.myTopping === "TOMATO TOPPING"){
            return 70;
        }else if(this.myTopping === "MUSHROOM TOPPING"){
            return 50
        }else if(this.myTopping === "ONION TOPPING" ){
            return 100;
        }else if(this.myTopping === "OLIVES TOPPING" ){
            return 70;
        }else if(this.myTopping === "VEGETABLES TOPPING"){
            return 50;
        }else(this.myTopping === "SALAMI TOPPINGS")
        {
            return 80;
        }
    } if(this.mySize === "small"){
        if(this.myTopping === "TOMATO TOPPING"){
            return 70;
        }else if(this.myTopping === "MUSHROOM TOPPING"){
            return 50
        }else if(this.myTopping === "ONION TOPPING" ){
            return 100;
        }else if(this.myTopping === "OLIVES TOPPING" ){
            return 70;
        }else if(this.myTopping === "VEGETABLES TOPPING"){
            return 50;
        }else(this.myTopping === "SALAMI TOPPINGS")
        {
            return 80;
        };
    }
};

Pizza.prototype.crustPrice = function(){
    if(this.myCrust === "THICK"){
        return 100;
    }else{
        return 50
    }
};

Pizza.prototype.sizePrice = function(){
    if(this.mySize === "large"){
        return 800;
    }else if(this.mySize === "medium"){
        return 550
    }else(this.mySize === "small")
    {
        return 350;
    };

    
};



// $(document).ready(function(e){
//     e.preventDefault();
//     var pizza1 = $("#service")
//     $("button#pizza1").click(function(){
//             $("#more").append(pizza1);
//     })
    
// });

$(document).ready(function(){
    $("#pizza1").click(function(){
        $("#service").toggle();
        $("#secondpizza").toggle();
    });

    // $("#development").click(function(){
    //     $("#dev-show").toggle();
    //     $("#dev-hide").toggle();
    // });

