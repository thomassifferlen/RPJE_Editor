var CurrentTile = 0;
var Is_ground = true;

function JsonExport()
{
	$("#json_output").val(RPJE_GetEngine().currentMap.exportJSON());
}


function SelectTile(tile,is_ground_bool)
{
	CurrentTile = tile;
	Is_ground = is_ground_bool;

	var typetmp = "";

	if(Is_ground)
	{
		typetmp = " This is a ground tile";
	}
	else
	{
		typetmp = " This is NOT a ground tile, tis is an object";
	}

	var text = "Selected = " + CurrentTile + typetmp;

	console.log(text);
}

function main()
{

	RPJE_SetMainEngine(new RPJE_Engine(new RPJE_Config(16,9,4)));

	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground1.png", 0, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground2.png", 1, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground3.png", 2, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground4.png", 3, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground5.png", 4, true); // base ground
	RPJE_GetEngine().displayManager.loadTile("Assets/World/grass.png", 5, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/plant.png", 6, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground_indoor.png", 7, true);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/ground_indoor2.png", 8, true);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/black.png", 99, true);

	//Ground Tiles are going from 0 to 5, we want a random ground
	//RPJE_GetEngine().currentMap.randomizeMapGround(7,7);

	//Map objects ( you can't walk on Map Objects)
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/sign.png", 0, false); //Sign

	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock1.png", 1, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock2.png", 2, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock3.png", 3, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock4.png", 4, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock5.png", 5, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock6.png", 6, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock7.png", 7, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock8.png", 8, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/World/Rock9.png", 9, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/woodsticks.png", 10, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_small_1.png", 11, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_small_2.png", 12, false);


	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_1.png", 13, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_2.png", 14, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_3.png", 15, false);
	RPJE_GetEngine().displayManager.loadTile("Assets/Objects/indoor_furniture_TV_4.png", 16, false);

	RPJE_GetEngine().displayManager.loadTile("Assets/World/black.png", 99, false);




	//world and maps JSON format
	RPJE_GetEngine().SetWorldMap(0, 0, '{"mapTiles":["0-0-4","0-1-2","0-2-5","0-3-4","0-4-3","0-5-0","0-6-0","0-7-5","0-8-2","1-0-2","1-1-5","1-2-2","1-3-2","1-4-1","1-5-0","1-6-3","1-7-0","1-8-0","2-0-3","2-1-2","2-2-2","2-3-4","2-4-4","2-5-3","2-6-3","2-7-0","2-8-4","3-0-0","3-1-2","3-2-5","3-3-1","3-4-2","3-5-5","3-6-1","3-7-3","3-8-3","4-0-3","4-1-4","4-2-2","4-3-1","4-4-1","4-5-3","4-6-1","4-7-0","4-8-3","5-0-4","5-1-4","5-2-4","5-3-4","5-4-4","5-5-4","5-6-0","5-7-4","5-8-0","6-0-3","6-1-0","6-2-0","6-3-5","6-4-1","6-5-0","6-6-1","6-7-4","6-8-1","7-0-6","7-1-2","7-2-3","7-3-4","7-4-4","7-5-4","7-6-1","7-7-2","7-8-3","8-0-2","8-1-6","8-2-3","8-3-2","8-4-0","8-5-4","8-6-5","8-7-4","8-8-4","9-0-3","9-1-6","9-2-6","9-3-0","9-4-3","9-5-4","9-6-1","9-7-2","9-8-4","10-0-3","10-1-6","10-2-2","10-3-1","10-4-1","10-5-5","10-6-0","10-7-1","10-8-5","11-0-4","11-1-4","11-2-5","11-3-1","11-4-2","11-5-1","11-6-3","11-7-4","11-8-2","12-0-6","12-1-3","12-2-4","12-3-5","12-4-3","12-5-5","12-6-2","12-7-3","12-8-1","13-0-5","13-1-0","13-2-0","13-3-4","13-4-1","13-5-2","13-6-2","13-7-2","13-8-2","14-0-6","14-1-4","14-2-5","14-3-0","14-4-3","14-5-4","14-6-5","14-7-3","14-8-0","15-0-6","15-1-6","15-2-5","15-3-3","15-4-3","15-5-0","15-6-3","15-7-2","15-8-1"],"mapObjects":["0-0-5","0-1-8","0-7-2","0-8-5","1-0-5","1-1-8","1-7-2","1-8-5","2-0-6","2-1-9","2-7-3","2-8-6","4-2-0","8-0-10","9-0-10","10-0-10","11-0-10","14-2-1","14-3-4","14-4-4","14-5-7","15-2-2","15-3-5","15-4-5","15-5-8"]}');
	RPJE_GetEngine().currentMap.loadMapJSON(RPJE_GetEngine().world[0][0]);

	RPJE_StartEngine(50);

	for(var i = 0; i < RPJE_GetEngine().displayManager.tilesGroundIMG_Array.length ; i++)
	{
		var tmpURL = RPJE_GetEngine().displayManager.tilesGroundIMG_Array[i].path;
		var TileValue_tmp = RPJE_GetEngine().displayManager.tilesGroundIMG_Array[i].TileValue;
		$( "#tiles1" ).append( '<img src="'+ tmpURL +'" class="imgtile" onclick="SelectTile('+TileValue_tmp+', true)"/>' );
	}

	for(var i = 0; i < RPJE_GetEngine().displayManager.tilesObjIMG_Array.length ; i++)
	{
		var tmpURL = RPJE_GetEngine().displayManager.tilesObjIMG_Array[i].path;
		var TileValue_tmp = RPJE_GetEngine().displayManager.tilesObjIMG_Array[i].TileValue;
		$( "#tiles2" ).append( '<img src="'+ tmpURL +'" class="imgtile" onclick="SelectTile('+TileValue_tmp+', false)"/>' );
	}

	$( "#tiles2" ).append( '<button onclick="SelectTile('+ (-1).toString() +', false)" >No Object</button>' );

	
	$("#Game").on("mousedown", function(e)
	{
		var offset = $(this).offset();

		var relativeX = (e.originalEvent.clientX - offset.left);
		var relativeY = (e.originalEvent.clientY - offset.top);

		var ArrayPosX = Math.floor(relativeX / RPJE_GetEngine().config.tileSize);
		var ArrayPosY = Math.floor(relativeY / RPJE_GetEngine().config.tileSize);

		console.log( ArrayPosX,ArrayPosY);

		if(Is_ground)
		{
			RPJE_GetEngine().currentMap.setTile(ArrayPosX,ArrayPosY, CurrentTile);
		}
		else
		{
			RPJE_GetEngine().currentMap.seMapObj(ArrayPosX,ArrayPosY, CurrentTile);
		}

	});




}