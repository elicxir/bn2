function GO_NEXT(name){
    //var s = cc.TransitionFade.create(2, new name());
    
    //cc.director.runScene(s);
    cc.LoaderScene.preload(m_resources, function () {
        cc.director.runScene(new name());
    }, this);
}




var TITLE_L = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
    
        var Label = new cc.LabelTTF("ver0.80", "Arial", 42);       
        Label.x = size.width / 2+190;
        Label.y = 70;
        Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        this.sprite = new cc.Sprite(res2.back_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.sprite2 = new cc.Sprite(res2.title_png);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite2, 0);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                 
                if (keyCode == cc.KEY.enter) {
                    
                    cc.director.runScene(new MENU_S());
                   
                }

                
            },
                
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            //タッチ開始時の処理
            onTouchBegan: function(touch, event){
                
                cc.director.runScene(new MENU_S());

              
                //これがないと落ちる
                return true;
            }
            //タッチ移動時の処理
           
           
        }, this);

        return true;
    }
});

var TITLE_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TITLE_L();
        this.addChild(layer);
    }
});

var re=[0,0,0,0,0,0];




var RESULT_L = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.result_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                 
                if (keyCode == cc.KEY.enter) {
                    cc.director.runScene(new MENU_S());
                   
                }

                
            },
                
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            //タッチ開始時の処理
            onTouchBegan: function(touch, event){
                
                cc.director.runScene(new MENU_S());

              
                //これがないと落ちる
                return true;
            }
            //タッチ移動時の処理
           
           
        }, this);
        
        return true;
    },

    init:function(){

        this.sprite1 = new cc.Sprite(graphpass);
        this.sprite1.attr({
            x: 250,
            y: 260,
            scale:0.7
        });
        this.addChild(this.sprite1, 3);

        this.Label1 = new cc.LabelTTF(MUSICDATA[nowselect].title, "Arial", 50);       
        this.Label1.x = 960*0.25;
        this.Label1.y = 90;
        this.Label1.setColor( cc.color(255, 255, 255, 20))
        this.addChild(this.Label1, 9);

        var Label = new cc.LabelTTF(re[0], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-100;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[1], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-145;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[2], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-185;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[3], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-230;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[4], "Arial", 44);       
             Label.x = 840;
            Label.y = 540-347;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[5], "Arial", 70);       
             Label.x = 700;
            Label.y = 540-475;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

    }
});

var RESULT_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new RESULT_L();
        layer.init();
        this.addChild(layer);
    }
});

