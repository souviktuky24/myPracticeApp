function Bike(model,color){
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails=function(){
    return this.model+ " Bike is "+this.color;
}

const objBike=new Bike('BMW','White');
console.log(objBike.getDetails());
console.log(objBike.__proto__===Bike.prototype);