var snakeX = 0;
var snakeY = 0;

$(function(){
        set_endpoint('http://iottalk2.tw:9992');
		set_PUSH_INTERVAL(500);  // unit: ms
		
        var profile = {
		    //'dm_name': 'Dummy_Device',          
			'dm_name': 'SnakeMoveModel',
            //'idf_list':[[Dummy_Sensor,['None']]],
			'idf_list':[],
		    //'odf_list':[[Dummy_Control,['None']]],			
			'odf_list': [[SnakeMove, ['None']]],
		    'u_name': '0416308'
        };
/*		
        function Dummy_Sensor(){
            return Math.random();
        }

        function Dummy_Control(data){
            $('.ODF_value')[0].innerText=data[0];
        }
*/
		function SnakeMove(data) {
			snakeX = data[1]/10.0, snakeY = data[0]/10.0;
			/*
			if (snakeX < 0) snakeX = -Math.sqrt(-snakeX);
			else snakeX = Math.sqrt(snakeX);
			if (snakeY < 0) snakeY = -Math.sqrt(-snakeY);
			else snakeY = Math.sqrt(snakeY);
			*/
		}

/*******************************************************************/                
        function ida_init(){console.log('Success.');}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
