const rectangle = {
    length:22,
    breadth:23
}

console.log(rectangle.length);
console.log(rectangle.breadth);


//* Factory Function
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

//* Constructor Function
//* Pascal Notation

function Rectangle(length,breadth){
    this.length=length,
    this.breadth = breadth,
    this.draw= function(){
        console.log(this.length," ",this.breadth);
    }
}

let rect1 = new Rectangle(3,4);
console.log(rect1);

let rect2 = new Rectangle(5,6);
console.log(rect2);

//* Default Object of constructor
let rect = new Function('length','breadth',`
    this.length=length,
    this.breadth = breadth,
    this.draw= function(){
        console.log(this.length," ",this.breadth);
    }
    `)
 let rect3 = new rect(2,3);

 console.log(rect3);
 console.log(rect3.length);
 console.log(rect3.breadth);
 console.log(rect3.draw);
 console.log(rect3.draw());
