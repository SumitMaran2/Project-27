class Bob
{
	constructor(x,y,r){ 
	
		
		var options={
			isStatic:true,
			restitution:0.6,
			friction:0.6,
			density:1.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		
		World.add(world, this.body);
		
	}
	display()
	{
		
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			
			fill("pink")
			//rectMode(CENTER)
			ellipse(0,0,this.r, this.r);
			pop()
		
			
			
	}
	
}