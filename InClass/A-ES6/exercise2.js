class Polygon {
  constructor(name = "Polygon", height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }

  calculateArea() {
    return this.height * this.width;
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.calculateArea());


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() { return this.width * this.height; }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas




