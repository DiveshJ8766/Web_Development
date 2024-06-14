const rectangle = {
    length:22,
    breadth:23
}

console.log(rectangle.length);
console.log(rectangle.breadth);


function createCar(name,color,wheel,seat,price){
    return carObj = {
        color,
        name,
        wheel,
        seat,
        price,
        showPrice(){
            console.log("Price of ",this.name," car : ",this.price);
        },
        noOfSeats(){
            console.log("No of Seats : ",this.seat);
        },
        printColor(){
            console.log("Color : ",this.color);
        },
        printName(){
            console.log("Name : ",this.name);
        },
        printWheel(){
            console.log("wheel : ",this.wheel)
        }
    }

}

let car1 = createCar("BMW","Mate Black",4,2,1000000);
let car2 = createCar("Lamborghini","Black",4,2,10000000);