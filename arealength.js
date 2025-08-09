
// function calculateArea(length, width) {
//     if(length <= 0 || width <= 0) {
//         return ("length and width must be positive numbers");
        
//     }
// }
//     return length * width;

//     console.log("Area of rectangle is: " + calculateArea(5, 10));

function calculateArea(length, width){
    if(length <= 0){
        throw new RangeError("Length should be a positive number");
    }
    if(width <= 0){
        throw new RangeError("Length should be a positive number");

    }
    const area = length* width;
    console.log("Area of rectangle is:" , area);
    throw new Error("Length should be a positive number");
}
calculateArea(5, 10);
alculateArea(200, 350);
