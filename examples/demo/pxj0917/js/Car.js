/**
 * Created by MLS on 14-9-11.
 * @author lq
 *
 *
 * car的名字，移动方向（0是竖着，1是横着，x坐标，y坐标）
 */
function Car(name,moveXy,isHero,isMoveCar,x,y){
    base(this,LSprite,[]);
    var self = this;
    //汽车名称
    self.name = name;
    //汽车是否是红色
    self.isHero = isHero;
    //汽车位置
    self.x = x;
    self.y = y;
    //移动方向
    self.moveXy = moveXy;
    //获取汽车属性
    self.list = Global.getCarStatus(self);
    //汽车图片
    self.bitmap = self.list[0];
    self.speed = self.list[1];
    //移动方向
    self.move = 0;
    //显示
    self.addChild(self.bitmap);
    self.vx =1;
    self.vy =1;
    self.index=0;
    self.oldX=x;
    self.oldY=y;
    self.MOVE_STEP=1;
    self.isMoveCar=isMoveCar;
}



/**
 * 循环
 * */
Car.prototype.onframe = function (){
    var self = this;
    var vactor = 1;
//    //移动
    if(self.x>500){
        //横着移动的要转换角度
        if(self.moveXy==1){
            if(self.rotate!=-90){
               self.rotate -= 5;
            }
            console.log(self.rotate);
            if(self.rotate==-90){
                vactor=-1;
                self.y += self.move*self.speed*vactor;
            }

        }else{
            self.y += self.move*self.speed*vactor;
        }

    }

    //自机移动位置限制
    if(self.isMoveCar == 1){
        if(self.x < 80){
            self.x = 80;
        } else if(self.isHero!=1&&(self.x + self.bitmap.getWidth() > (65*6+80))){
            console.log("n:"+self.name+",w:"+((65*6)-self.bitmap.getWidth()));
            self.x = (65*6+30)-self.bitmap.getWidth();
        }
        if(self.isHero!=1 && self.y < 30){
            self.y = 30;
        }else if(self.isHero!=1 && (self.y + self.bitmap.getHeight() > (65*6+30))){
            console.log("n:"+self.name+",h:"+((65*6)-self.bitmap.getHeight()));
            self.y = (65*6+30)-self.bitmap.getHeight();
        }
    }
};

/**
 * 碰撞检测
 * */
Car.prototype.hitTest = function (){
    var self = this;
    var disx,disy,sw,ew;
    for(var i=0;i<cars.length;i++){
        cars[i].addShape(LShape.RECT,[self.x,self.y,self.bitmap.getWidth(),self.bitmap.getHeight()]);
    }

    for(var i=0;i<cars.length;i++){
        if(cars[i]!=self){
            console.log(self.name+","+cars[i].name+",is hit:"+self.hitTestObject(cars[i]));
            if(self.hitTestObject(cars[i])){
                self.MOVE_STEP=0;
                break;
            }else{
                self.MOVE_STEP=1;
                break;
            }
        }
    }
};
