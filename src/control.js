var ctr_1;
var ctr_2;
var ctr_3;
var ctr_up;
var ctr_down;
var ctr_left;
var ctr_right;
var ctr_enter;

var now_1;
var now_2;
var now_3;
var now_up;
var now_down;
var now_left;
var now_right;
var now_enter;

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
}

var D_PAD = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        ctr_1=0;
        ctr_2=0;
        ctr_3=0;
        ctr_down=0;
        ctr_enter=0;
        ctr_left=0;
        ctr_right=0;
        ctr_up=0;

        now_1=0;
        now_2=0;
        now_3=0;
        now_down=0;
        now_enter=0;
        now_left=0;
        now_right=0;
        now_up=0;

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

        this.enter = new cc.Sprite(res.dpad2_png);
        this.enter.attr({
            x: 810,
            y: 170,
            scale:1.5

        });
        this.enter.setScale(1.5,1.5);

        this.addChild(this.enter, 7);

        this.left = new cc.Sprite(res.dpad1_png);
        this.left.attr({
            x: 725,
            y: 170,
            scale:1.5,
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
            x: 895,
            y: 170,
            scale:1.5,
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
            x: 810,
            y: 255,
            scale:1.5,
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
            x: 810,
            y: 85,
            scale:1.5,
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
        

        this.scheduleUpdate();


        return true;
    },
    update: function(){

        

        INPUT_UPDATE();


    }
});
