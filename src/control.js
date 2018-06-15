var ctr_1;
var ctr_2;
var ctr_3;
var ctr_up;
var ctr_down;
var ctr_left;
var ctr_right;
var ctr_enter;
var ctr_esc;

var now_1;
var now_2;
var now_3;
var now_up;
var now_down;
var now_left;
var now_right;
var now_enter;
var now_esc;

function INPUT(num,mode) {
    if(mode==0){
        switch(num){
            case 0:
            return ctr_enter;
            break;
    
            case 1:return ctr_1;
            break;
    
            case 2: return ctr_2;
            break;
    
            case 3: return ctr_3;
            break;
    
            case 4: return ctr_up;
            break;
    
            case 5: return ctr_down;
            break;
    
            case 6: return ctr_left;
            break;
    
            case 7: return ctr_right;
            break;

            case 8: return ctr_esc;
            break;
        }

    }
    else if(mode==1){
        switch(num){
            case 0:
            ctr_enter;
            break;
    
            case 1:ctr_1++;
            break;
    
            case 2: ctr_2++;
            break;
    
            case 3: ctr_3++;
            break;
    
            case 4:  ctr_up++;
            break;
    
            case 5:  ctr_down++;
            break;
    
            case 6:  ctr_left++;
            break;
    
            case 7:  ctr_right++;
            break;

            case 8:  ctr_esc++;
            break;
        }

    }
    
    
}

function INPUT_UPDATE(){
    if(now_1==1){
        ctr_1++;
    }
    else if(now_1==0){
        ctr_1=0;
    }

    if(now_2==1){
        ctr_2++;
    }
    else if(now_2==0){
        ctr_2=0;
    }

    if(now_3==1){
        ctr_3++;
    }
    else if(now_3==0){
        ctr_3=0;
    }

    if(now_up==1){
        ctr_up++;
    }
    else if(now_up==0){
        ctr_up=0;
    }

    if(now_down==1){
        ctr_down++;
    }
    else if(now_down==0){
        ctr_down=0;
    }

    if(now_left==1){
        ctr_left++;
    }
    else if(now_left==0){
        ctr_left=0;
    }

    if(now_right==1){
        ctr_right++;
    }
    else if(now_right==0){
        ctr_right=0;
    }

    if(now_enter==1){
        ctr_enter++;
    }
    else if(now_enter==0){
        ctr_enter=0;
    }

    if(now_esc==1){
        ctr_esc++;
    }
    else if(now_esc==0){
        ctr_esc=0;
    }
}


var D_PAD = cc.Layer.extend({
    sprite:null,
    init:function (mode) {
        this._super();
        var size = cc.winSize;

        this.side3=side;
        if(mode!=0){
            this.side3=0;
        }

        ctr_1=0;
        ctr_2=0;
        ctr_3=0;
        ctr_down=0;
        ctr_enter=0;
        ctr_left=0;
        ctr_right=0;
        ctr_up=0;
        ctr_esc=0;

        now_1=0;
        now_2=0;
        now_3=0;
        now_down=0;
        now_enter=0;
        now_left=0;
        now_right=0;
        now_up=0;
        now_esc=0;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,

            onKeyPressed: function(keyCode, event) {
                if (keyCode == cc.KEY.enter) {
                    now_enter=1;
                }
                
                if (keyCode == cc.KEY.n) {
                    now_1=1;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=1;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=1;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=1;
                }   

                if (keyCode == cc.KEY.left) {
                    now_left=1;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=1;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=1;                              
                }

                if (keyCode == cc.KEY.s) {
                    now_down=1;
                }   

                if (keyCode == cc.KEY.a) {
                    now_left=1;                              
                }
               
                if (keyCode == cc.KEY.d) {
                    now_right=1;                              
                }

                if (keyCode == cc.KEY.w) {
                    now_up=1;                              
                }
                
            },

            onKeyReleased: function(keyCode,event){ 
                
                if (keyCode == cc.KEY.enter) {
                    now_enter=0;
                }
                
                if (keyCode == cc.KEY.n) {
                    now_1=0;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=0;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=0;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=0;
                } 

                if (keyCode == cc.KEY.left) {
                    now_left=0;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=0;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=0;                              
                }

                if (keyCode == cc.KEY.s) {
                    now_down=0;
                } 

                if (keyCode == cc.KEY.d) {
                    now_left=0;                              
                }
               
                if (keyCode == cc.KEY.a) {
                    now_right=0;                              
                }

                if (keyCode == cc.KEY.w) {
                    now_up=0;                              
                }

            },
                
        }, this);
        
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,

            onKeyPressed: function(keyCode, event) {
                if (keyCode == cc.KEY.enter) {
                    now_enter=1;
                }
                
                if (keyCode == cc.KEY.n) {
                    now_1=1;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=1;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=1;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=1;
                }   

                if (keyCode == cc.KEY.left) {
                    now_left=1;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=1;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=1;                              
                }
                
            },

            onKeyReleased: function(keyCode,event){ 
                
                if (keyCode == cc.KEY.enter) {
                    now_enter=0;
                }
                
                if (keyCode == cc.KEY.n) {
                    now_1=0;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=0;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=0;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=0;
                } 

                if (keyCode == cc.KEY.left) {
                    now_left=0;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=0;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=0;                              
                }

            },
                
        }, this);

        if(mode==0){
            this.ge = new cc.Sprite();

        }
        else {
            this.ge = new cc.Sprite(res2.gear);

        }
        this.ge.attr({
            x: 540,
            y: 55,
            scale:0.6
        });

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_esc=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_esc=0;
                return true;
            }
        }, this.ge);

        this.addChild(this.ge, 7);
        

        if(mode==0){
            this.b1 = new cc.Sprite(res.b_png);
            this.b1.attr({
                x: Calu_X(1,side),
                y: 110,
                scale:1.15,
            });
        }
        else {
            this.b1 = new cc.Sprite(res.easy);
            this.b1.attr({
                x: Calu_X(1,0),
                y: 110,
                scale:1.15,
            });
        }
       

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_1=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_1=0;
                return true;
            }
        }, this.b1);

        this.addChild(this.b1, 7);

        if(mode==0){
            this.b2 = new cc.Sprite(res.b_png);
            this.b2.attr({
                x: Calu_X(2,side),
                y: 110,scale:1.15,
                
            });
        }
        else {
            this.b2 = new cc.Sprite(res.basic);
            this.b2.attr({
                x: Calu_X(2,0),
                y: 110,scale:1.15,
                
            });
        }
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_2=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_2=0;
                return true;
            }
        }, this.b2);
        this.addChild(this.b2, 7);
        if(mode==0){
            this.b3 = new cc.Sprite(res.b_png);
            this.b3.attr({
                x: Calu_X(3,side),
                y: 110,
                scale:1.15,
            });
        }
        else {
            this.b3 = new cc.Sprite(res.hard);
            this.b3.attr({
                x: Calu_X(3,0),
                y: 110,
                scale:1.15,
            });
        }
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_3=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_3=0;
                return true;
            }
        }, this.b3);
        this.addChild(this.b3, 7);

        this.enter = new cc.Sprite(res.dpad2_png);
        this.enter.attr({
            x: Calu_X(10,this.side3),
            y: 170,
            scale:1.6

        });
        this.enter.setScale(1.5,1.5);

        this.addChild(this.enter, 7);

        this.left = new cc.Sprite(res.dpad1_png);
        this.left.attr({
            x: Calu_X(10,this.side3)-92,
            y: 170,
            scale:1.8,
        });
        
        this.addChild(this.left, 7);
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_left=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_left=0;
                return true;
            }
        }, this.left);

        this.right = new cc.Sprite(res.dpad1_png);
        this.right.attr({
            x: Calu_X(10,this.side3)+92,
            y: 170,
            scale:1.8,
            rotation: 180
        });
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_right=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_right=0;
                return true;
            }
        }, this.right);
        this.addChild(this.right, 7);

        this.up = new cc.Sprite(res.dpad1_png);
        this.up.attr({
            x: Calu_X(10,this.side3),
            y: 262,
            scale:1.8,
            rotation: 90

        });
        
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_up=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_up=0;
                return true;
            }
        }, this.up);
        this.addChild(this.up, 7);

        this.down = new cc.Sprite(res.dpad1_png);
        this.down.attr({
            x: Calu_X(10,this.side3),
            y: 78,
            scale:1.8,
            rotation: 270
        });
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){
                var target=event.getCurrentTarget();
                var location=target.convertToNodeSpace(touch.getLocation());
                var spriteSize =target.getContentSize();
                var spriteRect =cc.rect(0,0,spriteSize.width,spriteSize.height);
                if(cc.rectContainsPoint(spriteRect,location)){
                    now_down=1;
                    return true;

                }
                return false;
            },
            onTouchEnded:function(touch, event){
                now_down=0;
                return true;
            }
        }, this.down);
        this.addChild(this.down, 7);

        if(mode==1){
            this.up.setOpacity(160);
            this.down.setOpacity(160);
            this.left.setOpacity(160);
            this.right.setOpacity(160);
        }
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,

            onKeyPressed: function(keyCode, event) {
                if (keyCode == cc.KEY.enter) {
                    now_enter=1;
                }
                if (keyCode == cc.KEY.escape) {
                    now_esc=1;
                }
                if (keyCode == cc.KEY.n) {
                    now_1=1;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=1;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=1;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=1;
                }   

                if (keyCode == cc.KEY.left) {
                    now_left=1;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=1;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=1;                              
                }
                
            },

            onKeyReleased: function(keyCode,event){ 
                if (keyCode == cc.KEY.escape) {
                    now_esc=0;
                }
                if (keyCode == cc.KEY.enter) {
                    now_enter=0;
                }
                
                if (keyCode == cc.KEY.n) {
                    now_1=0;
                }

                if (keyCode == cc.KEY.m) {
                    now_2=0;
                }

                if (keyCode == cc.KEY.comma) {
                    now_3=0;
                }

                if (keyCode == cc.KEY.down) {
                    now_down=0;
                } 

                if (keyCode == cc.KEY.left) {
                    now_left=0;                              
                }
               
                if (keyCode == cc.KEY.right) {
                    now_right=0;                              
                }

                if (keyCode == cc.KEY.up) {
                    now_up=0;                              
                }

            },
                
        }, this);
        

        this.scheduleUpdate();


        return true;
    },
    update: function(){

        

        INPUT_UPDATE();


    }
});
