//设置body元素的背景颜色
document.body.style.backgroundColor = "black";
document.body.style.background ="url('https://pic.imgdb.cn/item/650c6ed5c458853aeff6d50e.jpg')";
//设置body的高度
document.body.style.height = "80%";
//设置body的外间距
document.body.style.margin = "0";

//设置body超出范围的内容为不可见(不显示滚动条)
document.body.style.overflow = "hidden";



//浏览器高度
var wh = document.documentElement.clientHeight;
//浏览器宽度
var ww = document.documentElement.clientWidth;


// alert(document.documentElement.clientWidth);
// alert(document.documentElement.clientHeight);

function createFlake(){
    //创建一个img元素。
    var f = document.createElement("img");
    f.src = "flake.png";
    //把新创建的img元素插入到body中。
    document.body.appendChild(f);
    //设置雪花图片的宽高
    var n = Math.random();//0-1
    n = n*13+2;//10-50
    n = Math.floor(n);
    f.style.width = n+"px";
    f.style.height = n+"px";
    //使用绝对定位
    f.style.position = "absolute";
    //设置雪花的位置
    // var left = Math.random();

    //随机生成雪花的横坐标
    var l = Math.random()*(ww-n);
    l = Math.floor(l);
    f.style.left = l+"px";

    //随机生成雪花的纵坐标
    var h = Math.random()*(wh-n);
    h = Math.floor(h);
    f.style.top = h+"px";


    //让雪花做动画
    function move(){
        l = l+1;
        h+=2;

        // l+=Math.floor(Math.random()*5+1);
        // h+=Math.floor(Math.random()*5+1);

        if(l>ww){
            l = 0-n;
        }

        if(h>wh){
            h = 0-n;
        }
        f.style.left = l+"px";
        f.style.top = h+"px";

    }

    setInterval(move,17);

}

//for循环，使同一段代码执行多次。
for (var i = 0;i<50;i++){
    createFlake();
}