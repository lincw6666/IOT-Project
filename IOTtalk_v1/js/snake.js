var preX = 0;
var preY = 0;
var snakeX = 0;
var snakeY = 0;

$(function () {
	csmapi.set_endpoint ('http://140.113.199.187:9999');
	
	var profile = {
		'dm_name': 'Dummy_Device',
		'idf_list': [],
		'odf_list': [ Dummy_Control ],
	};
	
	function Dummy_Control(data) {
		preX = snakeX;
		preY = snakeY;
		snakeX += data[0][2];
		snakeY += data[0][1];
	}

	/**********************************************/
	function ida_init() {
		console.log(profile.d_name);
	}
	var ida = {
		'ida_init': ida_init,
	};
	dai(profile, ida);
});
