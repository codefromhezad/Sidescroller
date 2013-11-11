var Utils = {
	expandToXY: function(number, sizeX) {
		var y = Math.floor(number / sizeX);
		return {x: number - y * sizeX, y: y};
	},
	
	mapPositionToCoordinates: function(mapPosition) {
		return {
			x: mapPosition.x * Defaults.stageMap.unitSize[0],
			y: mapPosition.y * Defaults.stageMap.unitSize[1]
		};
	},
	
	coordinatesToMapPosition: function(coordinates) {
		return {
			x: Math.floor(coordinates.x / Defaults.stageMap.unitSize[0]),
			y: Math.floor(coordinates.y / Defaults.stageMap.unitSize[1])
		};
	}
};
