var BackgroundScroller = function(game) {
	
	this.backgroundLayers = {};
	
	this.game = game;
	
	for(var tex in Defaults.backgroundLayers) {
		this.backgroundLayers[tex] = new BackgroundLayer(tex);
		//this.game.viewport.track(this.backgroundLayers[tex]);
		this.game.stage.addChild( this.backgroundLayers[tex] );
	}
}

var BackgroundLayer = function(backgroundName) {
			
	this.name = backgroundName;
	
	var pathToTexture = 'background-'+this.name+'.png';
	var texture = PIXI.Texture.fromImage(pathToTexture);
	
	PIXI.TilingSprite.call(this, texture, Defaults.backgroundLayersSize[0], Defaults.backgroundLayersSize[1]);
	
	this.position.x = 0;
	this.position.y = Defaults.backgroundLayers[backgroundName].offsetY;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	
	this.speed = Defaults.backgroundLayers[backgroundName].speed;
}

BackgroundLayer.constructor = BackgroundLayer;
BackgroundLayer.prototype = Object.create(PIXI.TilingSprite.prototype);
