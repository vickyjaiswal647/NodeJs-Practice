var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l +" " + "b = " + b);
    if(l <= 0 || b <= 0){
        console.log("Please Enter dimensions greater than zero");
    }
    else{
        console.log("Perimeter of the rectangle is " +rect.perimeter(l,b));
        console.log("Area of the rectangle is " + rect.area(l,b));

    }
}

solveRect(2,3);
solveRect(-3,3);