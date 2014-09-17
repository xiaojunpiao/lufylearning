/**
 * Created by liqian on 2014-09-14.
 */
function StageMenu(){
    base(this,LSprite,[]);
    var self = this;

    var bitmap,menuLayer;
    menuLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["bg1"],0,223.480,800));
    menuLayer.addChild(bitmap);
    self.addChild(menuLayer);

    //menuLayer.addEventListener(LMouseEvent.MOUSE_UP,gameShow);

    for(var i=0;i<stageMenu.length;i++){
        self.stageVsMenu(stageMenu[i]);
    }


}

StageMenu.prototype.stageVsMenu = function(obj){
    var self = this;

    var menuButton,btn_up,bitmapbtn_up,bitmapbtn_down;
    if(obj.open){
        btn_up = new LSprite();
        bitmapbtn_up = new LBitmap(new LBitmapData(imglist['mode1'],760,95,75,75));
        btn_up.addChild(bitmapbtn_up);
        self.addChild(btn_up);


        labelText = new LTextField();
        labelText.color = "#000000";
        labelText.font = "HG行書体";
        labelText.size = 20;
        labelText.x = 30;
        labelText.y = 20;
        btn_up.addChild(labelText)
        labelText.text = obj.index+1;


        var btn_down = new LSprite();
        bitmapbtn_down = new LBitmap(new LBitmapData(imglist['mode1'],845,10,75,75));
        btn_down.addChild(bitmapbtn_down);
        self.addChild(btn_down);

        labelText = new LTextField();
        labelText.color = "#000000";
        labelText.font = "HG行書体";
        labelText.size = 20;
        labelText.x = 30;
        labelText.y = 20;
        labelText.text = obj.index+1;
        btn_down.addChild(labelText);


        menuButton = new LButton(btn_up,btn_down);
        menuButton.obj = obj;
        menuButton.addEventListener(LMouseEvent.MOUSE_UP,function(event){
            gameShow(event.clickTarget.obj.index);
            stageIndex = event.clickTarget.obj.index;
            console.log('stage'+stageIndex);
        });
    }else{
        btn_up = new LSprite();
        bitmapbtn_up = new LBitmap(new LBitmapData(imglist['mode1'],760,10,75,75));
        btn_up.addChild (bitmapbtn_up);
        self.addChild(btn_up);

        menuButton = btn_up;

    };
    self.addChild(menuButton);
    menuButton.x = obj.x * 80 + 50;
    console.log (obj);
    menuButton.y = obj.y * 100 + 100;

}


