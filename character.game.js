var Character = function(game) {
	
	texture = PIXI.Texture.fromImage('character.png');
	PIXI.Sprite.call(this, texture);
	
	this.game = game;
	
	this.mapPosition = Defaults.playerStart;
	this.position = Utils.mapPositionToCoordinates(this.mapPosition);
	
	this.anchor.y = 0.2;
	
	this.speed = Defaults.playerSpeed;
	this.direction = {x: 0, y: 0};
	
	this.action = null;
	this.oldAction = this.action;
	
	this.setAction("idle");

	this.action_timer = 0;
	
	this.game.viewport.track(this);
	
	this.game.stage.addChild(this);
}

Character.constructor = Character;
Character.prototype = Object.create(PIXI.Sprite.prototype);

Character.prototype.setX = function(newPX) {
	this.position.x = newPX;
	this.mapPosition = Utils.coordinatesToMapPosition(this.position);
}

Character.prototype.setY = function(newPY) {
	this.position.y = newPY;
	this.mapPosition = Utils.coordinatesToMapPosition(this.position);
}

Character.prototype.getX = function() {
	return this.position.x;
}

Character.prototype.getY = function() {
	return this.position.y;
}

Character.prototype.moveX = function(units) {
	var newX = this.getX() + units;
	this.setX(newX);
}

Character.prototype.moveY = function(units) {
	var newY = this.getY() + units;
	this.setY(newY);
}

Character.prototype.setAction = function(action) {
	this.oldAction = this.action;
	this.action = action;	
	
	if( this.game.show_log === true ) {
		document.getElementById('log').innerHTML = this.action + "<br />";
	}
	
	if( this.oldAction != this.action ) {
		this.action_timer = 0;
	}
}

Character.prototype.getAction = function() {
	return this.action;
}

Character.prototype.isOnFloor = function() {
	var tileIndex = Utils.packToX(this.mapPosition.x, this.mapPosition.y + 1, Defaults.stageMap.mapSize[0]);
	
	if( this.game.levelMap.levelTiles[tileIndex] === null ) {
		return false;
	}
	var lastGoodPosition = Utils.mapPositionToCoordinates(this.mapPosition);
	var yDiff = this.position.y - lastGoodPosition.y;
		
	this.position.y -= yDiff;
		
	return true;
}

Character.prototype.update = function() {
	
	// FMS
	switch( this.getAction() ) {
		case "idle":
			this.direction.x = 0;
			this.game.viewport.direction.x = 0;
			
			
			
			break;
		
		case "jump":
			if( this.action_timer == 0 ) {
				this.velocityY = 10;
			}
			this.moveY(- this.velocityY);
			this.velocityY -= 0.5;
			
			if( this.velocityY <= 0 ) {
				this.setAction('fall');
			}
			
			break;
			
		case "fall":
			if( this.action_timer == 0 ) {
				this.velocityY = 10;
			}
			this.velocityY += 0.5;
			this.moveY(this.velocityY);
			
			var pressed_keys = KeyboardJS.activeKeys();
			
			if( this.isOnFloor() ) {
				if( pressed_keys.indexOf("right") != -1 || pressed_keys.indexOf("left") != -1 ) {
					this.setAction("run");
				} else {
					this.setAction("idle");
				}
			}
			
			break;
		case "run":
			
			/* Nothing, for now */
			break;
	}
	
	this.action_timer += 0.1;
	
	// Proper movement
	this.moveX(this.speed * this.direction.x);
}
