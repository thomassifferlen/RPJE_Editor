
var MainEngine = "NULL";

var stats ;

class RPJE_Config
{
	constructor(nbr_Width, nbr_Height, worldSize)
	{
		this.nbr_Height = nbr_Height;
		this.nbr_Width = nbr_Width;
		this.worldSize = worldSize;
		this.tileSize = 16;
		this.EngineSpeed = 40
	}
}

class RPJE_Tick_Function
{
	constructor(id, func)
	{
		this.id = id;
		this.func = func;
		this.enabled = true;
	}
	
	run()
	{
		if(this.enabled)
		{
			this.func();
		}
	}
}

class RPJE_Engine
{
	constructor(myRPJE_Config)
	{
		this.is_Ready = false;

		this.config = myRPJE_Config;
		this.currentMap = new Map(this.config.nbr_Width, this.config.nbr_Height);
		
		this.displayManager = new DisplayManager(myRPJE_Config);


		this.world = new Array();

		for(var x = 0 ; x < this.config.worldSize ; x++)
	    {
	      this.world[x] = new Array();

	      for(var y = 0 ; y < this.config.worldSize ; y++)
	      {
	        this.world[x][y] = "NULL";
	      }
	    }

	    this.is_Ready = true;
	    this.is_Multiplayer = false;


	    this.TickFunc_Array = [];

	    stats = new Stats();
		stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
		//document.body.appendChild( stats.dom );

	    console.log("[INFO] Engine Ready");
	}

	Multiplayer_Connect_To(str)
	{
		this.networkManager.connect(str);
		this.is_Multiplayer = true;
		console.log("[INFO] Multiplayer to : " + str);
	}

	SetWorldMap(x ,y, json)
	{
		 this.world[x][y] = json;
	}

	SetEngineSpeed(speed_ms)
	{
		this.config.EngineSpeed = speed_ms;
	}

	GetEngineSpeed(speed_ms)
	{
		return this.config.EngineSpeed;
	}

	UpdateScreen()
	{
		this.displayManager.drawMap(this.currentMap);
	}

	UpdateMultiplayerScreenParts(net_Players_Array)
	{
		for( var i = 0 ; i < net_Players_Array.length ; i++)
		{
			if(net_Players_Array[i].id != this.networkManager.id_client) // si c'est pas le player local
			{
				this.player_Guest_Multiplayer.position.x = net_Players_Array[i].posx;
				this.player_Guest_Multiplayer.position.y = net_Players_Array[i].posy;
				this.player_Guest_Multiplayer.spriteNumber = parseInt(net_Players_Array[i].spriteNumber);
				this.player_Guest_Multiplayer.direction = parseInt(net_Players_Array[i].direction);

				this.displayManager.drawPlayer(this.player_Guest_Multiplayer);
			}
		}
	}

	Add_Tick_Function( newFunction )
	{
		this.TickFunc_Array.push(newFunction);
	}

	SetEnabled_Tick_Function_By_ID( id , is_enabled)
	{

		for( var i = 0 ; i < this.TickFunc_Array.length ; i++ )
        {
        	if(this.TickFunc_Array[i].id == id)
        	{
        		this.TickFunc_Array[i].enabled = is_enabled;
        	}
        }
	}

	Action()
	{
		this.actionManager.Run_Action_By_ID(this.player.GetFacingMapObject(this.currentMap, this.config));
	}

	tick()
	{
		stats.begin();

		if(this.is_Ready)
		{
	        for( var i = 0 ; i < this.TickFunc_Array.length ; i++ )
	        {
	        	if(this.TickFunc_Array[i] != null)
	        	{
	        		this.TickFunc_Array[i].run();
	        	}
	        }

			
			this.UpdateScreen();
		}
		else
		{
			console.warn("[INFO] tick() -> Engine is_Ready is set to False");
		}

		stats.end();
	}
}

console.log("RPJE by https://github.com/thomassifferlen - Role Playing Javascript Engine V1.0");