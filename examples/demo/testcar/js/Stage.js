var list,nowBoxList,stageList=[],boxList=[],playerList=[];

var stageMenu = [
{x:0,y:0,flag:0,times:0,index:0,lv:0,open:true},
{x:1,y:0,flag:0,times:0,index:1,lv:1,open:true},
{x:2,y:0,flag:0,times:0,index:2,lv:2,open:true},
{x:0,y:1,flag:0,times:0,index:3,lv:3,open:true},
{x:1,y:1,flag:1,times:0,index:4,lv:4,open:true},
{x:2,y:1,flag:1,times:0,index:5,lv:5,open:true}
];
if(window.localStorage.getItem("lufylegend_parkcar_stageMenu"))
stageMenu=JSON.parse(window.localStorage.getItem("lufylegend_parkcar_stageMenu"));

//var stage01 = [
//    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1,-1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1, 1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1, 1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1, 1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1, 1,-1,-1],
//    [-1,0, 0, 0, 0, 0, 0, -1, 1,-1,-1],
//    [-1,0, 0, 1, 1, 1, 1, -1, 1,-1,-1],
//    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
//];
//var box01 = [
//    {x:3,y:3},
//    {x:4,y:3},
//    {x:5,y:3},
//    {x:5,y:5},
//    {x:6,y:5},
//    {x:7,y:5}
//];
//stageList.push(stage01);
//boxList.push(box01);
//playerList.push({x:5,y:4});