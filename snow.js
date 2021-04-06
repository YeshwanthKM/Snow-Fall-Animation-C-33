class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.03,
			friction:0.01,
			density:0.03

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}


	update(){     
		if(this.body.position.y > height){

		 Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,450)})
	 }
 }

	display()
	{
			
			var s=this.body.position;		

			push()
			translate(s.x, s.y);
            ellipseMode(CENTER);
			strokeWeight(0)
			fill("white")
			ellipse(0,0,this.r, this.r);
			pop()
			
		}

}
