define(function(require, exports, module) {
    var $ = require('jquery');
    var layer = require('layer');
    layer.config({
        path: '../js/layer/',
        //layer.js所在的目录，可以是绝对目录，也可以是相对目录
        skin: 'layui-layer-lan',
        extend: ['../layer/extend/layer.ext.js']
    });



    $('#btn').on('click', function() {
        // layer.alert('初体验', {icon: 3});
        //tab层
        // layer.tab({
        //     area: ['600px', '300px'],
        //     tab: [{
        //         title: 'TAB1', 
        //         content: '内容1'
        //     }, {
        //         title: 'TAB2', 
        //         content: '内容2'
        //     }, {
        //         title: 'TAB3', 
        //         content: '内容3'
        //     }]
        // });
        //prompt层
        layer.prompt({
            title: '输入任何口令，并确认',
            formType: 1 //prompt风格，支持0-2
        }, function(pass) {
            layer.prompt({
                title: '随便写点啥，并确认',
                formType: 2
            }, function(text) {
                layer.msg('演示完毕！您的口令：' + pass + ' 您最后写下了：' + text);
            });
        });
    });

    $('#btn_type').on('click', function() {
        layer.open({
            // type: 1,
            // title: 'hello, world!',
            // content: $('#endText'),
            // success: function () {
            // }
            offset: 'lb',
            type: 1,
            title: false,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: false, //不显示关闭按钮
            shift: 5,
            shadeClose: true, //开启遮罩关闭
            content: $('#endText')
                // time: 1000
        });
    });

    $('#btn_iframe').on('click', function() {
        layer.open({
            type: 2,
            title: 'hello, world!',
            area: ['500px', '300px'],
            offset: '100px',


            content: ['http://www.baidu.com', 'no']
        });
    });
    $('#btn_tips').on('click', function(event) {
        event.preventDefault();
        layer.open({
            type: 4,
            content: ['tips吸附', '#btn_iframe'],
            closeBtn: false,
            time: 2000
        });
    });

    var data = {
        "title": "相册标题", //相册标题
        "id": 123, //相册id
        "start": 1, //初始显示的图片序号，默认0
        "data": [ //相册包含的图片，数组格式
            {
                "alt": "1phoste",
                "pid": 666, //图片id
                "src": "1.jpg", //原图地址
                "thumb": "1.jpg" //缩略图地址
            }, {
                "alt": "2phoste",
                "pid": 666, //图片id
                "src": "2.jpg", //原图地址
                "thumb": "2.jpg" //缩略图地址
            }, {
                "alt": "3phoste",
                "pid": 666, //图片id
                "src": "3.jpg", //原图地址
                "thumb": "3.jpg" //缩略图地址
            }
        ]
    };

    layer.ready(function() { //为了layer.ext.js加载完毕再执行
        layer.photos({
            photos: '#layer-photos-demo'
        });
    });

    // layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', '#btn_iframe', {
    //     tips: [4, '#3595CC'],
    //     time: 4000
    // });

    // layer.load(2);
    // var index = layer.confirm('quding', {
    //     btn: ['yes', 'no', 'goto'],
    //     yes: function(){
    //         console.log(1);
    //         layer.close(index);
    //     },
    //     btn2: function () {
    //         console.log(2);
    //     },
    //     btn3: function () {
    //         console.log(3);
    //     }
    // });

    // $(document).on('click', function(event) {
    //     event.preventDefault();
    //     layer.close(index);
    // });

    /*layer.open({
        content: $('#endText'),
        offset: ['100px', '200px'],
        btn: ['yes', 'no'],
        yes: function () {
            // console.info(1);
        },
        cancel: function () {
            // console.log(2);
        },
        type: 1,
        // area: ['640px', '450px'],
        closeBtn: 1,
        shade: ['0.2', '#f00'],
        // shade: false
        shadeClose: true,

        shift: 2,
        scrollbar:false,
        maxmin: true,
        moveType:1,
        moveOut: false,
        // moveEnd有bug
        moveEnd: function () {
            alert(1);
        }
    });*/

    /*layer.tips('在上面', '#btn_iframe', {
        tips: [4, '#f0f'] 
    }); 

    layer.tips('共存', '#btn_iframe', {
        tips: 2,
        tipsMore: false
    });*/

    /*layer.open({
        content: '测试回调',
        success: function(layero, index){
            $(layero).find('.layui-layer-title').html('sdfsd');
        }
    }); */

    /*layer.open({
        content: '测试yes回调',
        yes: function(index){
            //do something
            layer.close(index); //一般设定yes回调，必须进行手工关闭
        }
    });                
    */

    // var o163 = layer.open({
    //     content: 'http://www.baidu.com',
    //     btn: ['yes', 'no'],
    //     yes: function () {
    //         // console.info(1);
    //     },
    //     cancel: function () {
    //         // console.log(2);
    //     },
    //     type: 2,
    //     area: ['640px', '450px'],
    //     closeBtn: 1,
    //     shade: ['0.5', '#f00'],
    //     // shade: false
    //     shadeClose: true,

    //     shift: 4,
    //     scrollbar:false,
    //     maxmin: true,
    //     move: '.layui-layer-btn',
    //     success: function(layero, index){
    //            var body = layer.getChildFrame('body', index);
    //            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
    //            console.log(body.html()) //得到iframe页的body内容
    //            body.find('input').val('Hi，我是从父页来的')
    //        }
    // });



    // layer.title('163', o163);
    // layer.style(o163, {
    //     width: '500px',
    //     height: '500px'
    // });



    // layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
    //     //do something

    //     layer.close(index);
    // });


    // layer.msg('rurururur', {icon: 2, time: 2000}, function () {
    //     alert(11);
    // });


    // var index = layer.load(1,{time: 1000, shade: '#f00'});



});