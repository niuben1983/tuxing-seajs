define(function(require, exports, module) {
	var $ = require('jquery');
	$(document).ready(function($) {

		$('#test').css('background', '#f00');

		require.async('../js/common', function() {
			var tmp = '<div>{title}</div><ul><li>{title}</li><li>{time}</li><li>{3}</li></ul><div>{time}</div>';
			var tmp2 = '<li>[0]</li>';
			var data = {
				title: 'holle world!',
				sli: [2, 3, 4],
				time: '北京时间'
			};

			var oHtml = $.format(tmp, data);

			document.write(oHtml);

		});
	});



	
});