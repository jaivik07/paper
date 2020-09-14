class paper {
constructor(x,y){
   
  
    var option={
        "isStatic":false,
        "restitution":0.3,
        "frition":0.5,
        "density":1.2
        }
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y,10,option)
        World.add(world,this.body)

}
display(){
    this.shapeColor=color("blue")
    ellipseMode(RADIUS)
    ellipse(0,0,10,10)
}

}