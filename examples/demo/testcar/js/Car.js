/**
 * Created by leiyoo02 on 2014/9/11.
 */
function Car(data,row,col,speed){
    base(this,LSprite,[]);
    var self = this;
    //设定小车动作速度
    self.speed = speed ==null?3:speed;
    self.speedIndex = 0;

}