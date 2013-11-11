var Viewport = function(position) {
	this.position = position;
	this.tracked_objects = [];
	
	this.direction = {x: 0, y: 0};
	this.speed = Defaults.scrollSpeed;
}

Viewport.prototype.setX = function(newViewportX) {
	for(var i = 0; i < this.tracked_objects.length; i++) {
		var distanceTravelled = newViewportX - this.position.x;
		
		var speed = 1;
		var obj_name = this.tracked_objects[i].name || null;
		
		if( obj_name && Defaults.backgroundLayers[obj_name] ) {
			speed = Defaults.backgroundLayers[obj_name].speed;
		}
		
		if( this.tracked_objects[i].tilePosition ) {
			this.tracked_objects[i].tilePosition.x -= (distanceTravelled * speed);
		} else {
			this.tracked_objects[i].position.x -= (distanceTravelled * speed);
		}
	}
	this.position.x = newViewportX;
}

Viewport.prototype.setY = function(newViewportY) {
	for(var i = 0; i < this.tracked_objects.length; i++) {
		var distanceTravelled = newViewportY - this.position.y;
		
		var speed = 1;
		var obj_name = this.tracked_objects[i].name || null;
		
		if( obj_name && Defaults.backgroundLayers[obj_name] ) {
			continue;
			speed = Defaults.backgroundLayers[obj_name].speed;
		}
		
		if( this.tracked_objects[i].tilePosition ) {
			this.tracked_objects[i].tilePosition.y -= (distanceTravelled * speed);
		} else {
			this.tracked_objects[i].position.y -= (distanceTravelled * speed);
		}
	}
	this.position.y = newViewportY;
}

Viewport.prototype.getX = function() {
	return this.position.x;
}

Viewport.prototype.getY = function() {
	return this.position.y;
}

Viewport.prototype.moveX = function(units) {
	var newX = this.getX() + units;
	this.setX(newX);
}

Viewport.prototype.moveY = function(units) {
	var newY = this.getY() + units;
	if( newY > 0 ) return;
	this.setY(newY);
}

Viewport.prototype.track = function(objectToTrack) {
	this.tracked_objects.push(objectToTrack);
}

Viewport.prototype.update = function() {
	this.moveX(this.speed * this.direction.x);
	this.moveY(this.speed * this.direction.y);
}

