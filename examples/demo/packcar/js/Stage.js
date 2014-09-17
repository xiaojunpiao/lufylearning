/**
 * Created by leiyoo02 on 2014/9/14.
 */

//car的名字，移动方向（0是竖着，1是横着，x坐标，y坐标）
var carList=[];
var car01 = [
    {n:'redCarY',v:0,h:1,x:55+65*2,y:330+65*4},
    {n:'yellowCarX',v:1,h:0,x:55,y:330},
    {n:'bigGreyCarY',v:0,h:0,x:55,y:330+65},
    {n:'yellowCarX',v:1,h:0,x:55,y:330+65*4},
    {n:'bigGoldCarX',v:1,h:0,x:55+65,y:330+65},
    {n:'blueCarY',v:0,h:0,x:55+65*4,y:330},
    {n:'blueCarY',v:0,h:0,x:55+65*3,y:330+65*2},
    {n:'blueCarY',v:0,h:0,x:55+65*5,y:330+65*4},
    {n:'yellowCarX',v:1,h:0,x:55+65*3,y:330+65*4},
    {n:'yellowCarX',v:1,h:0,x:55+65*3,y:330+65*5}
];

var car02 = [
    {n:'redCarY',v:0,h:1,x:55+65*2,y:330+65*4},
    {n:'yellowCarX',v:1,h:0,x:55,y:330+65*2},
    {n:'yellowCarX',v:1,h:0,x:55+65*2,y:330+65*2},
    {n:'yellowCarX',v:1,h:0,x:55,y:330+65*5},
    {n:'yellowCarX',v:1,h:0,x:55+65*4,y:330+65*4},
    {n:'blueCarY',v:0,h:0,x:55+65*4,y:330+65*2},
    {n:'blueCarY',v:0,h:0,x:55+65*5,y:330+65*2},
    {n:'bigGreyCarY',v:0,h:0,x:55+65*3,y:330+65*3},
    {n:'bigGoldCarX',v:1,h:0,x:55+65*2,y:330}


];
//var runCars = [
//    {n:'yellowCarR',v:0,h:0,x:585,y:0},
//    {n:'blueCarR',v:0,h:0,x:650,y:0}
//];
carList.push(car01);
carList.push(car02);
//runCarList.push(runCars);

//var maplist = [];
//var nowMaplist = [];

//var  map01 = [
//    [0,1,1,1,1,1],
//    [0,1,0,0,1,1],
//    [1,1,0,0,1,0],
//    [1,1,1,1,1,0],
//    [1,1,0,0,1,1],
//    [1,1,0,0,0,0]
//];

//
//maplist.push(map01);

var list,nowBoxList,stageList=[],boxList=[],playerList=[];

var stageMenu = [
    {x:0,y:0,step:0,times:0,index:0,open:true},
    {x:1,y:0,step:0,times:0,index:1,open:true},
    {x:2,y:0,step:0,times:0,index:2,open:false},
    {x:3,y:0,step:0,times:0,index:3,open:false},
    {x:4,y:0,step:0,times:0,index:4,open:false},

    {x:0,y:1,step:0,times:0,index:5,open:false},
    {x:1,y:1,step:0,times:0,index:6,open:false},
    {x:2,y:1,step:0,times:0,index:7,open:false},
    {x:3,y:1,step:0,times:0,index:8,open:false},
    {x:4,y:1,step:0,times:0,index:9,open:false},

    {x:0,y:2,step:0,times:0,index:10,open:false},
    {x:1,y:2,step:0,times:0,index:11,open:false},
    {x:2,y:2,step:0,times:0,index:12,open:false},
    {x:3,y:2,step:0,times:0,index:13,open:false},
    {x:4,y:2,step:0,times:0,index:14,open:false},

    {x:0,y:3,step:0,times:0,index:15,open:false},
    {x:1,y:3,step:0,times:0,index:16,open:false},
    {x:2,y:3,step:0,times:0,index:17,open:false},
    {x:3,y:3,step:0,times:0,index:18,open:false},
    {x:4,y:3,step:0,times:0,index:19,open:false},

    {x:0,y:4,step:0,times:0,index:20,open:false},
    {x:1,y:4,step:0,times:0,index:21,open:false},
    {x:2,y:4,step:0,times:0,index:22,open:false},
    {x:3,y:4,step:0,times:0,index:23,open:false},
    {x:4,y:4,step:0,times:0,index:24,open:false},

    {x:0,y:5,step:0,times:0,index:25,open:false},
    {x:1,y:5,step:0,times:0,index:26,open:false},
    {x:2,y:5,step:0,times:0,index:27,open:false},
    {x:3,y:5,step:0,times:0,index:28,open:false},
    {x:4,y:5,step:0,times:0,index:29,open:false}

];