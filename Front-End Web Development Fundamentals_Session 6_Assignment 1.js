// Here is the calculate the area of circle example is used in javascript

function circle(radius){
	                    this.radius = radius;
                        this.area = function(){
                                                return Math.PI * this.radius * this.radius;
                                              };
                       }

var c = new circle(3);

console.log('Area = ', c.area().toFixed(2));
