// Add your Circle class here
class Circle {
  constructor(radius) {
    radius = this.radius;
    pi = Math.PI;
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.pi * this.diameter
  }
  get area(){
    return (this.radius ** 2) *  this.pi
  }
  set diameter(diameter){
    this.radius = diameter / 2
  }
  set circumference(circumference){
    this.diameter = circumference /  this.pi
  }
  set area(area){
    this.radius = Math.sqrt(area /  this.pi)
  }
}
