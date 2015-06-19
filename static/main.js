define(function(require, exports, module) {
	var $ = require('jquery');
	var layer = require('layer');

	layer.config({
		path: '../sea-modules/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
	});
	layer.msg('rurururur', {
		icon: 2,
		time: 2000
	}, function() {
		require.async('./common', function() {
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