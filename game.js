var x=0;
var y=0;
var ex;
var ey=0;
var car;
var enemies = [];
var current_enemy=0, num_enemies=128;
var col = [];


function draw()
{
	
	draw_sprite(canvas,car,x+SCREEN_W/2,y+SCREEN_H/2);
	
	for(var c=0;c<num_enemies;c++)
	{
    if(!enemies[c].on) continue;
	draw_sprite(canvas,enemy,enemies[c].x,enemies[c].y)
    }
}


function update()
{
	if(key[KEY_UP]) y=y-4;
	if(key[KEY_DOWN]) y=y+4;
	if(key[KEY_LEFT]) x=x-4;
	if(key[KEY_RIGHT]) x=x+4;
	
	enemies[current_enemy] = {x:ex+SCREEN_W/2,y:ey,on:true};
	
	for(var c=0;c<num_enemies;c++)
	{
    if(!enemies[c].on) continue;
	ey+=8;
	if(ey>SCREEN_H+64){
	enemies[c].on=false;
	current_enemy++;
	ey=0;
	ex=col[rand()%11].width-(SCREEN_W/2);
	}
    }
}
function init()
{
	var j=0;
	
	for(var c=0;c<num_enemies;c++)
	{
	enemies[c] =
	{
		x:0,
		y:0,
		on:false
	}
	}
    col[0] = {width:32};
	for(var i=1;i<10;i++)
	{
		col[i] = {width:640/10+j};
		j=j+64;
	}
		
}
function main()
{
	enable_debug('debug');
	allegro_init_all("game_canvas", 640, 480);
	car = load_bmp("car.png");
	enemy = load_bmp("enemy.png")
	ready(function(){
	init();
		loop(function(){
			clear_to_color(canvas,makecol(255,255,255));
			update();
			draw();
		},BPS_TO_TIMER(60));
	});
	return 0;
}
END_OF_MAIN();

 